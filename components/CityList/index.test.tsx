import { render, fireEvent } from '@testing-library/react-native';
import { CityList } from './index';

import cities from '@/mocks/search.json';

import { useAppDispatch } from '@/state/hooks';
import { updateUserLocation } from '@/state/slices/weather';
import { useRouter } from 'expo-router';

jest.mock('@/state/hooks', () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/state/slices/weather', () => ({
  updateUserLocation: jest.fn(),
}));

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

const mockDispatch = jest.fn();
const mockRouter = {
  back: jest.fn(),
};
const mockUpdateUserLocation = updateUserLocation;

describe('CityList Component', () => {
  beforeEach(() => {
    // const state = {
    //   weather: {
    //     userLocation: {
    //       lat: 51.509865,
    //       lng: -0.118092,
    //     },
    //   },
    // };

    jest.clearAllMocks();

    (useAppDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    (useRouter as unknown as jest.Mock).mockReturnValue(mockRouter);
    // (useAppSelector as unknown as jest.Mock).mockImplementation((f) =>
    //   f(state),
    // );
  });

  test('renders correctly with given text', () => {
    const { toJSON } = render(<CityList cities={cities} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('Should dispatch updateUserLocation when pressing a city', () => {
    const { getByTestId } = render(<CityList cities={cities.slice(0, 1)} />);
    const city = getByTestId('pressable-arrow-forward');
    fireEvent.press(city);

    expect(mockDispatch).toHaveBeenCalledWith(
      mockUpdateUserLocation({ lat: 51.509865, lng: -0.118092 }),
    );

    expect(mockRouter.back).toHaveBeenCalledTimes(1);
  });
});
