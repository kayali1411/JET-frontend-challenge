import { io } from 'socket.io-client';
import { store } from '../redux';
import {
  loginPlayer,
  resetPlayer,
  setTurnState,
  setSessionId,
} from '../redux/playerSlice';
import { Room } from '../types/gameStats';
import {
  addTurn,
  resetGame,
  setGameIsOver,
  setGameRoom,
  setGameStarted,
  setGameState,
  setInitialNumber,
  setWinner,
} from '../redux/gameStatsSlice';
import { setError } from '../redux/errorSlice';

const gameAPI = (() => {
  // TODO use dotenv
  const socket = io('ws://localhost:8082', { transports: ['websocket'] });
  let isGameStarted = false;

  // TODO add cleanup for socket listeners
  const initialize = () => {
    socket.on('connect', () => {
      store.dispatch(setSessionId(socket.id));
    });

    socket.on('message', ({ user, socketId }) => {
      if (user && socket.id === socketId) {
        store.dispatch(loginPlayer(user));
      }
    });

    socket.on('onReady', ({ state }) => {
      if (isGameStarted) {
        store.dispatch(setGameIsOver());
      }
      store.dispatch(setGameState(state));
    });

    socket.on('gameOver', ({ user }) => {
      store.dispatch(setWinner(user));
    });

    socket.on('error', ({ message }) => {
      store.dispatch(setError(message));
    });

    socket.on('randomNumber', ({ number, isFirst, selectedNumber, user }) => {
      if (!isGameStarted) {
        isGameStarted = true;
        store.dispatch(setGameStarted());
      }
      if (isFirst) {
        store.dispatch(setInitialNumber(Number(number)));
      } else {
        store.dispatch(
          addTurn({
            result: Number(number),
            isFirst,
            selectedNumber: Number(selectedNumber),
            player: user,
          }),
        );
      }
    });

    socket.on('activateYourTurn', ({ user, state }) => {
      if (user === socket.id) {
        store.dispatch(setTurnState(state));
      }
    });

    socket.on('disconnect', () => {
      store.dispatch(resetGame());
      store.dispatch(resetPlayer());
      store.dispatch(setError('Disconnected from server'));
    });
  };

  const login = (username: string) => {
    socket.emit('login', { username });
  };

  const joinRoom = (room: Room, username: string) => {
    socket.emit('joinRoom', { room: room.name, roomType: room.type, username });
    store.dispatch(setGameRoom(room));
  };

  const leaveRoom = () => {
    socket.emit('leaveRoom');
    isGameStarted = false;
    store.dispatch(resetGame());
  };

  const letsPlay = () => {
    socket.emit('letsPlay');
  };

  const sendNumber = (number: number, selectedNumber: number) => {
    socket.emit('sendNumber', { number, selectedNumber });
  };

  return {
    initialize,
    login,
    joinRoom,
    leaveRoom,
    sendNumber,
    letsPlay,
  };
})();

export default gameAPI;
