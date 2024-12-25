import { useMemo } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Subtitle } from '@/components/Core/Subtitle';
import { Forecastday } from '@/types/api/weather';

import { forecastFormat } from '@/helpers/forcastFormater';

const ForecastDayWrapper = styled.View`
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ForeCastDayItemWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  align-self: center;
  border-width: 3px;
  border-radius: 8px;
  margin-right: 12px;
  padding: 10px;
`;

const ConditionIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

const ForeCastDayItem = ({ item }: { item: any }) => {
  return (
    <ForeCastDayItemWrapper>
      <Subtitle style={{ fontSize: 16, fontFamily: 'bold' }}>
        {item.degree}°
      </Subtitle>
      <ConditionIcon source={{ uri: item.conditionIcon }} />
      <Subtitle style={{ fontSize: 14, fontFamily: 'bold' }}>
        {item.date}
      </Subtitle>
    </ForeCastDayItemWrapper>
  );
};

interface ForecastDayProps {
  days: Forecastday[];
}

export const ForecastDay = (props: ForecastDayProps) => {
  const data = useMemo(() => forecastFormat(props.days), [props.days]);

  return (
    <ForecastDayWrapper>
      <Subtitle style={{ marginBottom: 14, fontFamily: 'bold' }}>
        Weekly forecast
      </Subtitle>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        renderItem={({ item }) => <ForeCastDayItem item={item} />}
      />
    </ForecastDayWrapper>
  );
};
