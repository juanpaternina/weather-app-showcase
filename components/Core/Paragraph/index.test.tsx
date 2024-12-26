import { render, screen } from '@testing-library/react-native';

const { Paragraph } = require('.');

describe('Paragraph', () => {
  test('It should render a Text component', () => {
    const { toJSON } = render(<Paragraph>Paragraph</Paragraph>);
    expect(toJSON()).toMatchSnapshot();
    const text = screen.getByText('Paragraph');
    expect(text).toBeDefined();
  });
});
