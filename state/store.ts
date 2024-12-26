import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './slices/weather';
import themeSlice from './slices/theme';

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
