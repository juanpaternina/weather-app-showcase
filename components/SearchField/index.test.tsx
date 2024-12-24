import {
  render,
  userEvent,
  screen,
  waitFor,
} from '@testing-library/react-native';
import { SearchField } from '.';

jest.useFakeTimers();

// Mock the useSearch hook directly by mocking the named export
jest.mock('@/hooks/useSearch', () => ({
  useSearch: jest.fn(), // mock the useSearch hook
}));

describe('SearchField', () => {
  let mockSearchCity: jest.Mock;

  beforeEach(() => {
    mockSearchCity = jest.fn();
    const mockLoading = true;
    const mockError = null;
    const { useSearch } = require('@/hooks/useSearch');
    useSearch.mockReturnValue({
      searchCity: mockSearchCity,
      loading: mockLoading,
      error: mockError,
      errorMessage: '',
    });

    jest.clearAllMocks();
  });

  test('It should render a TextInput', async () => {
    render(<SearchField />);
    const textInput = screen.getByPlaceholderText('Search city');
    expect(textInput).toBeDefined();
  });

  test('It should call the handleSearchCity function when the user types', async () => {
    render(<SearchField />);

    const user = userEvent.setup();
    const textInput = screen.getByPlaceholderText('Search city');

    await user.type(textInput, 'Paris');
    expect(textInput.props.value).toBe('Paris');

    await waitFor(() => {
      const loadingText = screen.getByRole('text', { name: 'Loading...' });
      expect(mockSearchCity).toHaveBeenCalledTimes(1);
      expect(loadingText).toBeDefined();
    });
  });
});
