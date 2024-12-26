import React from 'react';
import { render } from '@testing-library/react-native';
import { Condition } from './index';

describe('Condition Component', () => {
  test('renders correctly with given text', () => {
    const { getByText } = render(
      <Condition condition="Test Condition" conditionImage="test.png" />,
    );
    expect(getByText('Test Condition')).toBeTruthy();
  });

  test('has correct styles', () => {
    const { getByText } = render(
      <Condition condition="Styled Condition" conditionImage="test.png" />,
    );
    const conditionElement = getByText('Styled Condition');
    expect(conditionElement.props.style).toMatchObject({
      textAlign: 'center',
      color: 'black',
    });
  });
});
