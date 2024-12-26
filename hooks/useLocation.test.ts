import { renderHook } from '@testing-library/react-native';
import { useLocation } from './useLocation';

describe('useLocation', () => {
  test('It should get the location', async () => {
    const mockGetCurrentPositionAsync = jest.fn();
    const mockRequestForegroundPermissionsAsync = jest.fn();

    jest.mock('expo-location', () => ({
      getCurrentPositionAsync: mockGetCurrentPositionAsync,
      requestForegroundPermissionsAsync: mockRequestForegroundPermissionsAsync,
    }));

    const { result } = renderHook(() => useLocation());

    await result.current.getLocation();

    expect(mockGetCurrentPositionAsync).toHaveBeenCalledTimes(1);
    expect(mockRequestForegroundPermissionsAsync).toHaveBeenCalledTimes(1);
  });
});
