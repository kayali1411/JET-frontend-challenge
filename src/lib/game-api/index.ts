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
  let selectedRoom: Room | null = null;
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
      if (state) {
        store.dispatch(setGameRoom(selectedRoom!));
      } else {
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

    socket.on('randomNumber', ({ number, isFirst, selectdNumber, user }) => {
      if (!isGameStarted) {
        isGameStarted = true;
        store.dispatch(setGameStarted());
      }
      if (isFirst) {
        store.dispatch(setInitialNumber(Number(number)));
      }
      store.dispatch(
        addTurn({
          result: Number(number),
          isFirst,
          selectedNumber: Number(selectdNumber),
          player: user,
        }),
      );
    });

    socket.on('activateYourTurn', ({ user, state }) => {
      if (user === socket.id) {
        store.dispatch(setTurnState(state));
      }
    });

    socket.on('disconnect', () => {
      store.dispatch(resetGame());
      store.dispatch(resetPlayer());
    });
  };

  const login = (username: string) => {
    socket.emit('login', { username });
  };

  const joinRoom = (room: Room, username: string) => {
    socket.emit('joinRoom', { room: room.name, roomType: room.type, username });
    selectedRoom = room;
  };

  const leaveRoom = () => {
    socket.emit('leaveRoom');
    store.dispatch(resetGame());
    store.dispatch(resetPlayer());
  };

  const letsPlay = () => {
    socket.emit('letsPlay');
  };

  const sendNumber = (selectedNumber: number) => {
    socket.emit('sendNumber', { selectedNumber });
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
