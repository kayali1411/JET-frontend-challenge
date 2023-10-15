import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface PlayerState {
  userName: string;
  isLoggedin: boolean;
  isConnected: boolean;
}

const initialState: PlayerState = {
  userName: '',
  isLoggedin: false,
  isConnected: false,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayerConnection: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
    loginPlayer: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
      state.isLoggedin = true;
    },
  },
});

export const { loginPlayer, setPlayerConnection } = playerSlice.actions;

export default playerSlice;
