import { useMemo } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Subtitle } from '@/components/Core/Subtitle';
import { Forecastday } from '@/types/api/weather';

import { forecastFormat } from '@/helpers/forcastFormater';

interface ForecastDayProps {
  days: Forecastday[];
}

const ForecastDayWrapper = styled.View`
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

export const ForecastDay = (props: ForecastDayProps) => {
  const data = useMemo(() => forecastFormat(props.days), [props.days]);

  return (
    <ForecastDayWrapper>
      <Subtitle
        style={{ marginBottom: 14, fontFamily: 'bold', paddingLeft: 30 }}
      >
        Weekly forecast
      </Subtitle>
      <FlatList
        style={{ paddingStart: 30 }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        renderItem={({ item }) => <ForeCastDayItem item={item} />}
      />
    </ForecastDayWrapper>
  );
};
