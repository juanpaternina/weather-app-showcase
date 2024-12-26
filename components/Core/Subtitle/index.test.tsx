import { render, screen } from '@testing-library/react-native';

const { Subtitle } = require('.');

describe('Subtitle', () => {
  test('It should render a Text component', () => {
    const { toJSON } = render(<Subtitle>Subtitle</Subtitle>);
    expect(toJSON()).toMatchSnapshot();
    const text = screen.getByText('Subtitle');
    expect(text).toBeDefined();
  });
});
