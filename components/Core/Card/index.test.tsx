import { render } from '@testing-library/react-native';

const { Card } = require('.');

describe('Card', () => {
  test('It should render a View component', () => {
    const { toJSON } = render(<Card />);
    expect(toJSON()).toMatchSnapshot();
  });
});
