import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Room, Turn } from '../types/gameStats';

interface GameStatsState {
  turnsHistory: Turn[];
  room: Room | null;
  isOver: boolean;
  isReady: boolean;
  isStarted: boolean;
  winner: string;
}

const initialState: GameStatsState = {
  turnsHistory: [],
  room: null,
  isOver: false,
  isReady: false,
  isStarted: false,
  winner: '',
};

export const gameStatsSlice = createSlice({
  name: 'gameStats',
  initialState,
  reducers: {
    setWinner: (state, action: PayloadAction<string>) => {
      state.winner = action.payload;
      state.isOver = true;
    },
    setGameIsOver: (state) => {
      state.isOver = true;
      state.isStarted = false;
    },
    addTurn: (state, action: PayloadAction<Turn>) => {
      state.turnsHistory = [...state.turnsHistory, action.payload];
    },
    setGameState: (state, action: PayloadAction<boolean>) => {
      state.isReady = action.payload;
    },
    setGameRoom: (state, action: PayloadAction<Room>) => {
      state.room = action.payload;
    },
    setGameStarted: (state) => {
      state.isStarted = true;
    },
    resetGame: () => initialState,
  },
});

export const {
  setWinner,
  setGameRoom,
  setGameState,
  setGameIsOver,
  setGameStarted,
  addTurn,
  resetGame,
} = gameStatsSlice.actions;

export default gameStatsSlice;
