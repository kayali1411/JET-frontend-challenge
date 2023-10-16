import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Room, Turn } from '../types/gameStats';

interface GameStatsState {
  turnsHistory: Turn[];
  room: Room | null;
  isOver: boolean;
  isReady: boolean;
  isStarted: boolean;
  initialNumber: number;
  currentNumber: number;
  winner: string;
}

export const initialState: GameStatsState = {
  turnsHistory: [],
  room: null,
  isOver: false,
  isReady: false,
  isStarted: false,
  initialNumber: 0,
  currentNumber: 0,
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
    setInitialNumber: (state, action: PayloadAction<number>) => {
      state.initialNumber = action.payload;
      state.currentNumber = action.payload;
    },
    addTurn: (state, action: PayloadAction<Turn>) => {
      state.turnsHistory = [...state.turnsHistory, action.payload];
      state.currentNumber = action.payload.result;
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
  setInitialNumber,
  addTurn,
  resetGame,
} = gameStatsSlice.actions;

export default gameStatsSlice;
