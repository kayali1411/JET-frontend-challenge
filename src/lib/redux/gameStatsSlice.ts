import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Room, Turn } from '../types/gameStats';

interface GameStatsState {
  turnsHistory: Turn[];
  room: Room | null;
  isOver: boolean;
  isReady: boolean;
  winner: string;
}

const initialState: GameStatsState = {
  turnsHistory: [],
  room: null,
  isOver: false,
  isReady: false,
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
    resetGame: () => initialState,
  },
});

export const {
  setWinner,
  setGameRoom,
  setGameState,
  setGameIsOver,
  addTurn,
  resetGame,
} = gameStatsSlice.actions;

export default gameStatsSlice;
