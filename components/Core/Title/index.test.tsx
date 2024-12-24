import { render, screen } from '@testing-library/react-native';

const { Title } = require('.');

describe('Title', () => {
  test('It should render a Text component', () => {
    render(<Title>Title</Title>);
    const text = screen.getByText('Title');
    expect(text).toBeDefined();
  });
});
