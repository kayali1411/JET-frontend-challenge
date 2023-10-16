import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import playerSlice from './playerSlice';
import gameStats from './gameStatsSlice';
import gameApiSlice from './gameApiSlice';
import errorSlice from './errorSlice';

const rootReducer = combineReducers({
  player: playerSlice.reducer,
  gameStats: gameStats.reducer,
  error: errorSlice.reducer,
  [gameApiSlice.reducerPath]: gameApiSlice.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(gameApiSlice.middleware);
    },
    preloadedState,
  });
};

const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default store;
