import React from 'react';
import { render } from '@testing-library/react-native';
import App from '@/app/index';

import { useLocation } from '@/hooks/useLocation';

import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { useFetchWeather } from '@/hooks/useFetchWeather';

import data from '@/mocks/weather.json';

// Mock components
jest.mock('@/components/Header', () => ({
  Header: jest.fn(() => <></>),
}));
jest.mock('@/components/Date', () => ({
  Date: jest.fn(() => <></>),
}));
jest.mock('@/components/Degrees', () => ({
  Degrees: jest.fn(() => <></>),
}));
jest.mock('@/components/Condition', () => ({
  Condition: jest.fn(() => <></>),
}));
jest.mock('@/components/Summary', () => ({
  Summary: jest.fn(() => <></>),
}));
jest.mock('@/components/ForecastDay', () => ({
  ForecastDay: jest.fn(() => <></>),
}));

jest.mock('@/state/hooks', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

jest.mock('@/hooks/useLocation', () => ({
  useLocation: jest.fn(),
}));

jest.mock('@/hooks/useFetchWeather', () => ({
  useFetchWeather: jest.fn(),
}));

const mockDispatch = jest.fn();

describe('App Component', () => {
  beforeEach(() => {
    const state = {
      weather: {
        location: {
          lat: 51.509865,
          lng: -0.118092,
        },
      },
      theme: {
        color: 'white',
      },
    };

    const getLocationMock = jest.fn();

    (useAppDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    (useAppSelector as unknown as jest.Mock).mockImplementation((f) =>
      f(state),
    );

    (useLocation as jest.Mock).mockReturnValue({
      getLocation: getLocationMock,
    });
    jest.clearAllMocks();
  });

  test('renders correctly', () => {
    (useFetchWeather as jest.Mock).mockReturnValue({
      data: data,
      error: false,
      errorMessage: '',
      loading: false,
      fetchWeather: jest.fn(),
    });

    const { toJSON } = render(<App />);

    expect(toJSON()).toMatchSnapshot();
  });

  test("Should show an error message if there's an error", () => {
    (useFetchWeather as jest.Mock).mockReturnValue({
      data: null,
      error: true,
      errorMessage: 'Error message',
      loading: false,
      fetchWeather: jest.fn(),
    });

    const { toJSON } = render(<App />);

    expect(toJSON()).toMatchSnapshot();
  });
});
