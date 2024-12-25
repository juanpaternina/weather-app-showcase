import React from 'react';
import { SearchField } from '@/components/SearchField';
import { Pressable, SafeAreaView } from 'react-native';

import styled from 'styled-components/native';
import { Link, useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const SearchWrapper = styled.View`
  flex: 1;
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
`;

const SafeAreaViewWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const BackButton = styled(Pressable)`
  margin-bottom: 7px;
`;

export default function Search() {
  const router = useRouter();

  return (
    <SafeAreaViewWrapper>
      <SearchWrapper>
        <BackButton onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color="black" />
        </BackButton>
        <SearchField />
      </SearchWrapper>
    </SafeAreaViewWrapper>
  );
}
