import { render, screen } from '@testing-library/react-native';

const { Paragraph } = require('.');

describe('Paragraph', () => {
  test('It should render a Text component', () => {
    render(<Paragraph>Paragraph</Paragraph>);
    const text = screen.getByText('Paragraph');
    expect(text).toBeDefined();
  });
});
