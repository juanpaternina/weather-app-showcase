import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Search from '@/app/search';

import { useRouter } from 'expo-router';

jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@expo/vector-icons/MaterialIcons', () => ({
  __esModule: true,
  default: ({ name, size, color }) => (
    <mock-icon test-id={`material-icon-${name}`} size={size} color={color} />
  ),
}));

jest.mock('@/components/SearchField', () => ({
  SearchField: jest.fn(() => <></>),
}));

describe('Search Component', () => {
  beforeAll(() => {
    jest.clearAllMocks();
    (useRouter as unknown as jest.Mock).mockReturnValue({
      back: jest.fn(),
    });
  });

  test('It should render SearchField component', () => {
    const { toJSON } = render(<Search />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('Back button should navigate to the previous screen', () => {
    const { getByTestId } = render(<Search />);
    const backButton = getByTestId('back-button');
    fireEvent.press(backButton);

    expect(useRouter().back).toHaveBeenCalledTimes(1);
  });
});
