import { configureStore } from '@reduxjs/toolkit';
import playerSlice from './playerSlice';
import gameStats from './gameStatsSlice';
import gameApiSlice from './gameApiSlice';
import errorSlice from './errorSlice';

const store = configureStore({
  reducer: {
    player: playerSlice.reducer,
    gameStats: gameStats.reducer,
    error: errorSlice.reducer,
    [gameApiSlice.reducerPath]: gameApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(gameApiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
