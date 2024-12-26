import { useCallback } from 'react';
import * as Location from 'expo-location';

import { useAppDispatch } from '@/state/store';
import { updateUserLocation } from '@/state/slices/weather';

export const useLocation = () => {
  const dispatch = useAppDispatch();

  const getLocation = useCallback(async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return;
    }

    const { coords } = await Location.getCurrentPositionAsync({});

    dispatch(
      updateUserLocation({ lat: coords.latitude, lng: coords.longitude }),
    );
  }, [dispatch]);

  return { getLocation };
};
