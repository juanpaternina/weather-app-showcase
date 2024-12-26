import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Summary } from '.';

jest.mock('@expo/vector-icons/MaterialIcons', () => ({
  __esModule: true,
  default: ({ name, size, color }) => (
    <mock-icon
      data-testid={`material-icon-${name}`}
      size={size}
      color={color}
    />
  ),
}));

describe('Summary', () => {
  const initialProps = {
    summary: 'Partly cloudy with light winds',
    windSpeed: 15,
    humidity: 65,
    visibility: 10,
  };

  test('renders daily summary title and text', () => {
    render(<Summary {...initialProps} />);

    expect(screen.getByText('Daily Summary')).toBeTruthy();
    expect(screen.getByText(initialProps.summary)).toBeTruthy();
  });

  test('renders weather metrics with correct values', () => {
    render(<Summary {...initialProps} />);

    expect(screen.getByText('15 kph')).toBeTruthy();
    expect(screen.getByText('65%')).toBeTruthy();
    expect(screen.getByText('10 km')).toBeTruthy();
  });

  test('renders all weather metric labels', () => {
    render(<Summary {...initialProps} />);

    expect(screen.getByText('Wind')).toBeTruthy();
    expect(screen.getByText('Humidity')).toBeTruthy();
    expect(screen.getByText('Visibility')).toBeTruthy();
  });
});
