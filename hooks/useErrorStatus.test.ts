import { renderHook, waitFor } from '@testing-library/react-native';
import { useErrorStatus } from './useErrorStatus';
import { act } from 'react';

describe('useErrorStatus', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useErrorStatus());
    expect(result.current.error).toBe(false);
    expect(result.current.errorMessage).toBe('');
  });

  it('should update error state and custom error message', () => {
    const { result } = renderHook(() => useErrorStatus());
    act(() => {
      result.current.updateErrorState(true, 'Custom error');
    });
    expect(result.current.error).toBe(true);
    expect(result.current.errorMessage).toBe('Custom error');
  });

  it('should set default error message if no message is provided', () => {
    const { result } = renderHook(() => useErrorStatus());
    act(() => {
      result.current.updateErrorState(true);
    });
    expect(result.current.error).toBe(true);
    expect(result.current.errorMessage).toBe('Something went wrong');
  });

  it('should reset error state and clear message', () => {
    const { result } = renderHook(() => useErrorStatus());
    act(() => {
      result.current.updateErrorState(true, 'Custom error');
    });
    act(() => {
      result.current.updateErrorState(false);
    });
    expect(result.current.error).toBe(false);
    expect(result.current.errorMessage).toBe('');
  });

  it('should preserve the existing error message if `isError` is true and `errorMessage` is already set', () => {
    const { result } = renderHook(() => useErrorStatus());
    act(() => {
      result.current.updateErrorState(true, 'First error');
    });
    act(() => {
      result.current.updateErrorState(true);
    });
    expect(result.current.error).toBe(true);
    expect(result.current.errorMessage).toBe('First error');
  });
});
