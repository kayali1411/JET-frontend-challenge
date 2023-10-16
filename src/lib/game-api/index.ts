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

type EventListeners = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [eventName: string]: (payload: any) => void;
};

const gameAPI = (() => {
  const socket = io(import.meta.env.VITE_API_WS_URL, {
    transports: ['websocket'],
  });
  let isGameStarted = false;
  const eventListeners: EventListeners = {};

  window.addEventListener('beforeunload', () => {
    Object.keys(eventListeners).forEach((eventName) => {
      removeEventListener(eventName);
    });
  });

  const addEventListener = (
    eventName: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback: (payload: any) => void,
  ) => {
    socket.on(eventName, callback);
    eventListeners[eventName] = callback;
  };

  const removeEventListener = (eventName: string) => {
    if (eventListeners[eventName]) {
      socket.off(eventName, eventListeners[eventName]);
      delete eventListeners[eventName];
    }
  };

  const initialize = () => {
    addEventListener('connect', () => {
      store.dispatch(setSessionId(socket.id));
    });

    addEventListener('message', ({ user, socketId }) => {
      if (user && socket.id === socketId) {
        store.dispatch(loginPlayer(user));
      }
    });

    addEventListener('onReady', ({ state }) => {
      if (isGameStarted) {
        store.dispatch(setGameIsOver());
      }
      store.dispatch(setGameState(state));
    });

    addEventListener('gameOver', ({ user }) => {
      store.dispatch(setWinner(user));
    });

    addEventListener('error', ({ message }) => {
      store.dispatch(setError(message));
    });

    addEventListener(
      'randomNumber',
      ({ number, isFirst, selectedNumber, user }) => {
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
      },
    );

    addEventListener('activateYourTurn', ({ user, state }) => {
      if (user === socket.id) {
        store.dispatch(setTurnState(state));
      }
    });

    addEventListener('disconnect', () => {
      store.dispatch(resetGame());
      store.dispatch(resetPlayer());
      store.dispatch(setError('Disconnected from the server'));
    });
  };

  const login = (username: string) => {
    socket.emit('login', { username });
  };

  const joinRoom = async (room: Room, username: string) => {
    await leaveRoom(); // make sure to quit the previous room
    socket.emit('joinRoom', { room: room.name, roomType: room.type, username });
    store.dispatch(setGameRoom(room));
  };

  const leaveRoom = async () => {
    socket.emit('leaveRoom');
    isGameStarted = false;
    store.dispatch(resetGame());
    await new Promise((resolve) => setTimeout(resolve, 100));
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
