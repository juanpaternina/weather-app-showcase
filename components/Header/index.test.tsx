import { render, screen } from '@testing-library/react-native';
const { Header } = require('.');

jest.mock('expo-router', () => ({
  Link: ({ children }) => children,
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

describe('Header', () => {
  const defaultProps = {
    cityName: 'London',
    countryName: 'UK',
  };

  test('It should render Header component', () => {
    const { toJSON } = render(<Header {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('It should render Header component with the city and country name', () => {
    render(<Header {...defaultProps} />);
    expect(screen.getByText('London, UK')).toBeTruthy();
  });

  test('It should render Search button', () => {
    render(<Header {...defaultProps} />);
    const searchIcon = screen.getByTestId('material-icon-search');
    expect(searchIcon).toBeTruthy();
  });
});
