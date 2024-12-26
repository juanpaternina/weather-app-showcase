import { act } from 'react';
import { renderHook } from '@testing-library/react-native';
import * as Location from 'expo-location';
import { useLocation } from './useLocation';
import { updateUserLocation } from '@/state/slices/weather';
import { useAppDispatch } from '@/state/hooks';

// Mock Redux hooks and actions
jest.mock('@/state/store', () => ({
  useAppDispatch: jest.fn(),
}));
jest.mock('@/state/slices/weather', () => ({
  updateUserLocation: jest.fn(),
}));

// Mock Expo Location methods
jest.mock('expo-location', () => ({
  getCurrentPositionAsync: jest.fn(),
  requestForegroundPermissionsAsync: jest.fn(),
}));

const mockDispatch = jest.fn();
const mockUpdateUserLocation = updateUserLocation;

describe('useLocation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });

  test('dispatches location when permission is granted', async () => {
    // Mock successful permission and location responses
    (Location.requestForegroundPermissionsAsync as jest.Mock).mockResolvedValue(
      { status: 'granted' },
    );
    (Location.getCurrentPositionAsync as jest.Mock).mockResolvedValue({
      coords: { latitude: 51.509865, longitude: -0.118092 },
    });

    const { result } = renderHook(() => useLocation());

    await act(async () => {
      await result.current.getLocation();
    });

    // Assertions
    expect(Location.requestForegroundPermissionsAsync).toHaveBeenCalledTimes(1);
    expect(Location.getCurrentPositionAsync).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(
      mockUpdateUserLocation({ lat: 51.509865, lng: -0.118092 }),
    );
  });

  test('does not dispatch location when permission is denied', async () => {
    // Mock denied permission
    (Location.requestForegroundPermissionsAsync as jest.Mock).mockResolvedValue(
      { status: 'denied' },
    );

    const { result } = renderHook(() => useLocation());

    await act(async () => {
      await result.current.getLocation();
    });

    // Assertions
    expect(Location.requestForegroundPermissionsAsync).toHaveBeenCalledTimes(1);
    expect(Location.getCurrentPositionAsync).not.toHaveBeenCalled();
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
