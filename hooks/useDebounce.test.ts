import { render, renderHook, waitFor } from '@testing-library/react-native';
import useDebounce from './useDebounce';

describe('useDebounce', () => {
  test('It should debounce the function', () => {
    const mockFunction = jest.fn();
    renderHook(() => {
      const debouncedFunction = useDebounce(mockFunction, 1000);
      debouncedFunction();
    });

    expect(mockFunction).toHaveBeenCalledTimes(0);
    waitFor(() => {
      expect(mockFunction).toHaveBeenCalledTimes(1);
    });
  });
});
