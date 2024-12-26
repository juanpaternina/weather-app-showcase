import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './slices/weather';
import themeSlice from './slices/theme';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
