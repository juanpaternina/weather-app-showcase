import React from 'react';

import { FlatList, Text } from 'react-native';
import { City } from '@/types/city';

interface CityListProps {
  cities: City[] | null;
}

interface CityItemProps {
  item: City;
}

const CityItem = (item: CityItemProps) => {
  return <Text>{item.item.name}</Text>;
};

export const CityList = (props: CityListProps) => {
  return (
    <FlatList
      data={props.cities}
      renderItem={({ item }) => <CityItem item={item} />}
    />
  );
};
