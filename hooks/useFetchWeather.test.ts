import { act } from 'react';
import { renderHook, waitFor } from '@testing-library/react-native';
import { useFetchWeather } from './useFetchWeather';

import data from '@/mocks/weather.json';
import { WeatherAPI } from '@/types/api/weather';

jest.mock('@/helpers/config', () => ({
  getAPIKey: () => 'mocked_api_key',
}));

jest.mock('@/hooks/useAPI', () => ({
  useAPI: jest.fn(), // mock the useSearch hook
}));

describe('useFetchWeather', () => {
  let mockCallApi: jest.Mock;

  beforeEach(() => {
    mockCallApi = jest.fn();
    jest.clearAllMocks();
  });

  test('Should call the fetchAPI function and get data', async () => {
    const { useAPI } = require('@/hooks/useAPI');
    useAPI.mockReturnValue({
      data: data as WeatherAPI,
      error: false,
      errorMessage: '',
      loading: false,
      fetchAPI: mockCallApi,
    });

    const { result } = renderHook(() => useFetchWeather());
    act(() => {
      result.current.fetchWeather(0, 0);
    });

    const apiResult = result.current.data;

    await waitFor(() => {
      expect(mockCallApi).toHaveBeenCalledTimes(1);
      expect(apiResult).toBeDefined();
      expect(apiResult?.current).toBeDefined();
      expect(apiResult?.location).toBeDefined();
      expect(result.current.error).toBeFalsy();
      expect(result.current.errorMessage).toBe('');
      expect(result.current.loading).toBeFalsy();
    });
  });

  test('Should test error state when fetch fails and return the right value', async () => {
    const { useAPI } = require('@/hooks/useAPI');
    useAPI.mockReturnValue({
      data: null,
      error: true,
      errorMessage: `Couldn't fetch data, please try again later`,
      loading: false,
      fetchAPI: mockCallApi,
    });

    const { result } = renderHook(() => useFetchWeather());
    act(() => {
      result.current.fetchWeather(0, 0);
    });

    const apiResult = result.current.data;

    await waitFor(() => {
      expect(mockCallApi).toHaveBeenCalledTimes(1);
      expect(apiResult).toBeNull();
      expect(result.current.error).toBeTruthy();
      expect(result.current.errorMessage).toBe(
        "Couldn't fetch data, please try again later",
      );
      expect(result.current.loading).toBeFalsy();
    });
  });
});
