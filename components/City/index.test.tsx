import React from 'react';
import { render } from '@testing-library/react-native';
import { City } from './index';

describe('City Component', () => {
  test('renders correctly with given text', () => {
    const { getByText } = render(<City>Test City</City>);
    expect(getByText('Test City')).toBeTruthy();
  });

  test('has correct styles', () => {
    const { getByText } = render(<City>Styled City</City>);
    const cityElement = getByText('Styled City');
    expect(cityElement.props.style).toMatchObject({
      textAlign: 'center',
      width: 250,
      fontSize: 22,
      alignSelf: 'center',
    });
  });

  test('Snapshot', () => {
    const { toJSON } = render(<City>Test City</City>);
    expect(toJSON()).toMatchSnapshot();
  });
});
