import styled from 'styled-components/native';

import { Title } from '@/components/Core/Title';
import { Subtitle } from '@/components/Core/Subtitle';

import { StyleSheet } from 'react-native';

const Wrapper = styled.View`
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  align-self: center;
  padding: 10px;
`;

interface DegreesProps {
  degrees: number;
}

export const Degrees = ({ degrees }: DegreesProps) => {
  return (
    <Wrapper>
      <Title style={stlyes.degrees}>{degrees}</Title>
      <Subtitle style={stlyes.symbol}>°</Subtitle>
    </Wrapper>
  );
};

const stlyes = StyleSheet.create({
  degrees: {
    fontSize: 150,
  },
  symbol: {
    marginTop: -50,
    fontSize: 120,
  },
});
