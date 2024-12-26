import { render, screen } from '@testing-library/react-native';

const { Date } = require('.');

describe('Date', () => {
  test('It should render a Text component', () => {
    const { toJSON } = render(<Date>Date</Date>);
    expect(toJSON()).toMatchSnapshot();

    const text = screen.getByText('Date');
    expect(text).toBeDefined();
  });
});
