import { CityList } from './index';

import cities from '@/mocks/search.json';
import { renderWithProviders } from '@/utils/test-utils';

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

describe('CityList Component', () => {
  test('renders correctly with given text', () => {
    const { toJSON } = renderWithProviders(<CityList cities={cities} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
