import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserLocation } from '@/types/userLocation';

interface WeatherState {
  location: UserLocation;
}

const initialState: WeatherState = {
  location: {
    lat: 52.5167,
    lng: 13.4,
  },
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    updateUserLocation: (state, action: PayloadAction<UserLocation>) => ({
      ...state,
      location: action.payload,
    }),
  },
});

export const { updateUserLocation } = weatherSlice.actions;
export default weatherSlice.reducer;
