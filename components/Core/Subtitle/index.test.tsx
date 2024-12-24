import { render, screen } from '@testing-library/react-native';

const { Subtitle } = require('.');

describe('Subtitle', () => {
  test('It should render a Text component', () => {
    render(<Subtitle>Subtitle</Subtitle>);
    const text = screen.getByText('Subtitle');
    expect(text).toBeDefined();
  });
});
