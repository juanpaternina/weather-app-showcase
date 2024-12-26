import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';

import { City } from '@/components/City';
import { Link } from 'expo-router';

import styled from 'styled-components/native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface HeaderProps {
  cityName: string;
  countryName: string;
}

const SearchContainer = styled(Pressable)`
  position: absolute;
  top: 0;
  right: 20px;
`;

export const Header = (props: HeaderProps) => {
  return (
    <View>
      <City style={styles.city}>
        {props.cityName}, {props.countryName}
      </City>

      <SearchContainer testID="material-icon-search">
        <Link href="/search" asChild>
          <MaterialIcons name="search" size={32} color="black" />
        </Link>
      </SearchContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  city: {
    marginBottom: 4,
  },
});
