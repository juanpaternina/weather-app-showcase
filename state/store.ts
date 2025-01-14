import { combineReducers, configureStore } from '@reduxjs/toolkit';
import weatherSlice from './slices/weather';
import themeSlice from './slices/theme';

const rootReducer = combineReducers({
  weather: weatherSlice,
  theme: themeSlice,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const store = setupStore();
