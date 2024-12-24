import { act } from 'react';
import { renderHook } from '@testing-library/react-native';
import { useSearch } from './useSearch';
import { City } from '@/types/city';

import search from '@/mocks/search.json';

jest.mock('@/hooks/useAPI', () => ({
  useAPI: jest.fn(), // mock the useSearch hook
}));

describe('useSearch', () => {
  let mockCallApi: jest.Mock;

  beforeEach(() => {
    mockCallApi = jest.fn();
    jest.clearAllMocks();
  });

  test('Should test initial status, updateErrorState, and return the right value', async () => {
    const { useAPI } = require('@/hooks/useAPI');
    useAPI.mockReturnValue({
      data: search as City[],
      error: false,
      errorMessage: '',
      loading: false,
      fetchAPI: mockCallApi,
    });

    const { result } = renderHook(() => useSearch());

    // Trigger the search and wait for the async state update
    await act(async () => {
      result.current.searchCity('Paris');
    });

    const apiResult = result.current.data;

    // Assert final state after the search completes
    expect(mockCallApi).toHaveBeenCalledTimes(1);
    expect(apiResult).toHaveLength(5);
    expect(apiResult).toEqual(search);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeFalsy();
    expect(result.current.errorMessage).toBe('');
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

    const { result } = renderHook(() => useSearch());

    await act(async () => {
      result.current.searchCity('Paris');
    });

    // Assert final state after the search completes
    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeTruthy();
    expect(result.current.errorMessage).toBe(
      "Couldn't fetch data, please try again later",
    );
  });
});
