import { render, screen } from '@testing-library/react-native';

const { Title } = require('.');

describe('Title', () => {
  test('It should render a Text component', () => {
    const { toJSON } = render(<Title>Title</Title>);
    expect(toJSON()).toMatchSnapshot();
    const text = screen.getByText('Title');
    expect(text).toBeDefined();
  });
});
