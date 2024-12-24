import { act } from 'react';
import { renderHook, waitFor } from '@testing-library/react-native';
import { useAPI } from './useAPI';

const mockData = [
  { id: 1, name: 'Leanne Graham' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
  { id: 4, name: 'Patricia Lebsack' },
  { id: 5, name: 'Chelsey Dietrich' },
];

jest.mock('@/hooks/useErrorStatus', () => ({
  useErrorStatus: jest.fn(),
}));

jest.mock('@/hooks/useLoadingStatus', () => ({
  useLoadingStatus: jest.fn(),
}));

describe('useAPI', () => {
  let updateLoadingState: jest.Mock;
  let updateErrorState: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();

    updateLoadingState = jest.fn();
    updateErrorState = jest.fn();

    const { useLoadingStatus } = require('@/hooks/useLoadingStatus');
    useLoadingStatus.mockReturnValue({
      updateLoadingState,
      loading: false,
    });

    global.fetch = jest.fn();
  });

  test('Should fetch data and return the right value', async () => {
    const { useErrorStatus } = require('@/hooks/useErrorStatus');
    useErrorStatus.mockReturnValue({
      updateErrorState,
      error: false,
      errorMessage: '',
    });

    const { result } = renderHook(() => useAPI());

    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeFalsy();
    expect(result.current.errorMessage).toBe('');
    expect(result.current.loading).toBeFalsy();

    jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
      //@ts-ignore
      Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve(mockData),
      }),
    );

    act(() => {
      result.current.fetchAPI(
        'https://api.weatherapi.com/v1/current.json?key=b7a9e87f9d0d4a0a8d7b9a6e9b5a4c0b&q=48.867,2.333&days=5',
      );
    });

    await waitFor(() => {
      expect(updateLoadingState).toHaveBeenCalledTimes(2);
      expect(result.current.data).toEqual(mockData);
      expect(result.current.loading).toBeFalsy();
      expect(result.current.error).toBeFalsy();
      expect(result.current.errorMessage).toBe('');
    });
  });

  test('Should test error state when fetch fails and return a message', async () => {
    const { useErrorStatus } = require('@/hooks/useErrorStatus');
    useErrorStatus.mockReturnValue({
      updateErrorState,
      error: true,
      errorMessage: "Couldn't fetch data, please try again later",
    });

    const { result } = renderHook(() => useAPI());

    expect(result.current.data).toBeNull();
    expect(result.current.errorMessage).toBe(
      "Couldn't fetch data, please try again later",
    );
    expect(result.current.loading).toBeFalsy();

    jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
      //@ts-ignore
      Promise.resolve({
        status: 503,
        ok: false,
      }),
    );

    act(() => {
      result.current.fetchAPI(
        'https://api.weatherapi.com/v1/current.json?key=b7a9e87f9d0d4a0a8d7b9a6e9b5a4c0b&q=48.867,2.333&days=5',
      );
    });

    await waitFor(() => {
      expect(result.current.data).toBeNull();
      expect(result.current.loading).toBeFalsy();
      expect(result.current.error).toBeTruthy();
      expect(result.current.errorMessage).toBe(
        "Couldn't fetch data, please try again later",
      );
      expect(updateErrorState).toHaveBeenCalled();
      expect(updateLoadingState).toHaveBeenCalledTimes(2);
    });
  });
});
