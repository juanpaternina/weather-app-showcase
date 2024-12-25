import { useCallback } from 'react';
import * as Location from 'expo-location';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/state/store';
import { updateUserLocation } from '@/state/slices/weather';

export const useLocation = () => {
  const dispatch = useDispatch<AppDispatch>();

  const getLocation = useCallback(async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    const { coords } = await Location.getCurrentPositionAsync({});

    console.log('Current Location', coords);
    dispatch(
      updateUserLocation({ lat: coords.latitude, lng: coords.longitude }),
    );
  }, [dispatch]);

  return { getLocation };
};
