import React from 'react';
import styled from 'styled-components/native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Paragraph } from '@/components/Core/Paragraph';
import { Subtitle } from '@/components/Core/Subtitle';
import { Card } from '@/components/Core/Card';
import { View } from 'react-native';

const SummaryWrapper = styled.View`
  padding-left: 30px;
  padding-right: 30px;
`;

const SummaryItem = (props: {
  type: string;
  value: string;
  icon: JSX.Element;
}) => {
  return (
    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      {props.icon}
      <Subtitle style={{ color: 'white' }}>{props.value}</Subtitle>
      <Paragraph style={{ color: 'white', fontSize: 13 }}>
        {props.type}
      </Paragraph>
    </View>
  );
};

const SummaryCard = (props: {
  wind: number;
  humidity: number;
  visibility: number;
}) => {
  return (
    <Card
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 20,
      }}
    >
      <SummaryItem
        type="Wind"
        value={`${props.wind} kph`}
        icon={<MaterialIcons name="wind-power" size={32} color="white" />}
      />
      <SummaryItem
        type="Humidity"
        value={`${props.humidity}%`}
        icon={<MaterialIcons name="water-drop" size={32} color="white" />}
      />
      <SummaryItem
        type="Visibility"
        value={`${props.visibility} km`}
        icon={<MaterialIcons name="visibility" size={32} color="white" />}
      />
    </Card>
  );
};

interface SummaryProps {
  summary: string;
  windSpeed: number;
  humidity: number;
  visibility: number;
}

export const Summary = ({
  summary,
  windSpeed,
  humidity,
  visibility,
}: SummaryProps) => {
  return (
    <SummaryWrapper>
      <Subtitle style={{ marginBottom: 14, fontFamily: 'bold' }}>
        Daily Summary
      </Subtitle>
      <Paragraph style={{ marginBottom: 20 }}>{summary}</Paragraph>
      <SummaryCard
        wind={windSpeed}
        humidity={humidity}
        visibility={visibility}
      />
    </SummaryWrapper>
  );
};
