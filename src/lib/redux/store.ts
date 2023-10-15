import { configureStore } from '@reduxjs/toolkit';
import playerSlice from './playerSlice';
import gameStats from './gameStatsSlice';

const store = configureStore({
  reducer: {
    player: playerSlice.reducer,
    gameStats: gameStats.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
