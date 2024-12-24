import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Subtitle } from '@/components/Core/Subtitle';

const sampleData = [
  {
    degree: 10,
    conditionIcon: 'https://cdn.weatherapi.com/weather/64x64/day/122.png',
    date: '21 Jan',
  },
  {
    degree: 14,
    conditionIcon: 'https://cdn.weatherapi.com/weather/64x64/day/122.png',
    date: '22 Jan',
  },
  {
    degree: 22,
    conditionIcon: 'https://cdn.weatherapi.com/weather/64x64/day/122.png',
    date: '23 Jan',
  },
  {
    degree: 8,
    conditionIcon: 'https://cdn.weatherapi.com/weather/64x64/day/122.png',
    date: '24 Jan',
  },
  {
    degree: 12,
    conditionIcon: 'https://cdn.weatherapi.com/weather/64x64/day/122.png',
    date: '25 Jan',
  },
];

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

export const ForecastDay = () => {
  return (
    <ForecastDayWrapper>
      <Subtitle style={{ marginBottom: 10, fontFamily: 'bold' }}>
        Weekly forecast
      </Subtitle>
      <FlatList
        horizontal={true}
        data={sampleData}
        renderItem={({ item }) => <ForeCastDayItem item={item} />}
      />
    </ForecastDayWrapper>
  );
};
