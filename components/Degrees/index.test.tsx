import { render, screen } from '@testing-library/react-native';

const { Degrees } = require('.');

describe('Degrees', () => {
  test('It should render a Text component', () => {
    const { toJSON } = render(<Degrees degrees={10} />);
    expect(toJSON()).toMatchSnapshot();
    const text = screen.getByText('10');
    expect(text).toBeDefined();
  });
});
