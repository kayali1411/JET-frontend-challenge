import { configureStore } from '@reduxjs/toolkit';
import playerSlice from './playerSlice';
import gameStats from './gameStatsSlice';
import gameApiSlice from './gameApiSlice';

const store = configureStore({
  reducer: {
    player: playerSlice.reducer,
    gameStats: gameStats.reducer,
    [gameApiSlice.reducerPath]: gameApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(gameApiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
