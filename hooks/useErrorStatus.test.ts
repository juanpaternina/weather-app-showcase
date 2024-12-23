import { renderHook } from '@testing-library/react-native';
import { useErrorStatus } from './useErrorStatus';
import { act } from 'react';

describe('useErrorStatus', () => {
  test('Should test initial status, updateErrorState and return the right value', () => {
    const { result } = renderHook(() => useErrorStatus());
    expect(result.current.error).toBeFalsy();

    act(() => {
      result.current.updateErrorState(true, 'test error');
    });
    expect(result.current.error).toBeTruthy();

    act(() => {
      result.current.updateErrorState(false);
    });

    expect(result.current.error).toBeFalsy();
  });
});
