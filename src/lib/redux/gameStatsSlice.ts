import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { GameStatus, Room, Turn } from '../types/gameStats';

interface GameStatsState {
  turns: Turn[];
  room: Room | null;
  state: GameStatus | null;
  isOver: boolean;
  winner: string;
}

const initialState: GameStatsState = {
  turns: [],
  room: null,
  state: null,
  isOver: false,
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
    setGameState: (state, action: PayloadAction<GameStatus>) => {
      state.state = action.payload;
    },
    addTurn: (state, action: PayloadAction<Turn>) => {
      state.turns = [...state.turns, action.payload];
    },
    setGameRoom: (state, action: PayloadAction<Room>) => {
      state.room = action.payload;
    },
  },
});

export const { setWinner, setGameRoom, setGameState, addTurn } =
  gameStatsSlice.actions;

export default gameStatsSlice;
