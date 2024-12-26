import React from 'react';

import { FlatList } from 'react-native';
import { City } from '@/types/city';
import { updateUserLocation } from '@/state/slices/weather';

import { useRouter } from 'expo-router';
import styled from 'styled-components/native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { shuffleTheme } from '@/state/slices/theme';
import { useAppDispatch } from '@/state/hooks';

interface CityListProps {
  cities: City[] | null;
}

interface CityItemProps {
  item: City;
}

const PressableCity = styled.Pressable`
  border-color: black;
  border-bottom-width: 1px;
  align-content: center;
  vertical-align: center;
  padding-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  flex-direction: row;
  height: 50px;
`;

const CityName = styled.Text`
  font-size: 16px;
  color: black;
  align-items: center;
  justify-content: center;
  flex: 1;
  word-wrap: break-word;
`;

const CityItem = (item: CityItemProps) => {
  const dispatcher = useAppDispatch();
  const router = useRouter();

  const handlePress = (city: City) => {
    dispatcher(updateUserLocation({ lat: city.lat, lng: city.lon }));
    dispatcher(shuffleTheme());
    router.back();
  };

  return (
    <PressableCity onPress={() => handlePress(item.item)}>
      <CityName>
        {item.item.name}, {item.item.region}, {item.item.country}
      </CityName>
      <MaterialIcons name="arrow-forward" size={24} color="black" />
    </PressableCity>
  );
};

export const CityList = (props: CityListProps) => {
  return (
    <FlatList
      data={props.cities}
      renderItem={({ item }) => <CityItem item={item} />}
    />
  );
};
