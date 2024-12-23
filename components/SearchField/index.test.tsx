import {
  render,
  userEvent,
  screen,
  waitFor,
} from '@testing-library/react-native';
import { SearchField } from '.';

jest.useFakeTimers();

describe('SearchField', () => {
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
      expect(loadingText).toBeDefined();
    });
  });
});
