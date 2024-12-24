import styled from 'styled-components/native';
import { Subtitle } from '@/components/Core/Subtitle';

export const ConditionWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const ConditionText = styled(Subtitle)`
  color: black;
  text-align: center;
`;

const ConditionIcon = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const Condition = ({
  condition,
  conditionImage,
}: {
  condition: string;
  conditionImage: string;
}) => {
  return (
    <ConditionWrapper>
      <ConditionText>{condition}</ConditionText>
      <ConditionIcon source={{ uri: `https:${conditionImage}` }} />
    </ConditionWrapper>
  );
};
