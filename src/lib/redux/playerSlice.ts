import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { GameStatus } from '../types/gameStats';

interface PlayerState {
  userName: string;
  sessionId: string;
  isLoggedin: boolean;
  isConnected: boolean;
  turnState: GameStatus;
}

const initialState: PlayerState = {
  userName: '',
  sessionId: '',
  isLoggedin: false,
  isConnected: false,
  turnState: GameStatus.WAIT,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setSessionId: (state, action: PayloadAction<string>) => {
      state.sessionId = action.payload;
      state.isConnected = true;
    },
    setTurnState: (state, action: PayloadAction<GameStatus>) => {
      state.turnState = action.payload;
    },
    loginPlayer: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
      state.isLoggedin = true;
    },
    resetPlayer: () => initialState,
  },
});

export const { loginPlayer, setSessionId, setTurnState, resetPlayer } =
  playerSlice.actions;

export default playerSlice;
