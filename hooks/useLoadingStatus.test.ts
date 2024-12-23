import { renderHook } from '@testing-library/react-native';
import { useLoadingStatus } from './useLoadingStatus';
import { act } from 'react';

describe('useLoadingStatus', () => {
  test('Should test initial status, updateErrorState and return the right value', () => {
    const { result } = renderHook(() => useLoadingStatus());
    expect(result.current.loading).toBeFalsy();

    act(() => {
      result.current.updateLoadingState(true);
    });
    expect(result.current.loading).toBeTruthy();

    act(() => {
      result.current.updateLoadingState(false);
    });

    expect(result.current.loading).toBeFalsy();
  });
});
