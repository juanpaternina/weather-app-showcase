import { requestCreator } from '@/helpers/requestCreator';
import { API_TYPES } from '@/constants/Api';
import { useAPI } from './useAPI';
import { WeatherAPI } from '@/types/api/weather';
import { useCallback } from 'react';

export const useFetchWeather = () => {
  const { data, error, errorMessage, loading, fetchAPI } = useAPI<WeatherAPI>();

  const fetchWeather = useCallback(
    (lat: number, long: number) => {
      console.log('Fetch called with ', lat, long);
      const requestURL = requestCreator(API_TYPES.FORECAST, {
        q: `${lat},${long}`,
        days: 6,
      });
      fetchAPI(requestURL);
    },
    [fetchAPI],
  );

  return {
    data,
    error,
    errorMessage,
    loading,
    fetchWeather,
  };
};
