import React, { useState } from 'react';
import { TextInput, Text } from 'react-native';

import { useSearch } from '@/hooks/useSearch';
import useDebounce from '@/hooks/useDebounce';

export const SearchField = () => {
  const [searchText, setSearchText] = useState('');
  const { searchCity, loading, error, errorMessage } = useSearch();

  const debouncedSearch = useDebounce((queryString: string) => {
    //searchCity(queryString);
  }, 700);

  const handleSearchCity = (queryString: string) => {
    setSearchText(queryString);
    debouncedSearch(queryString);
  };

  return (
    <>
      <TextInput
        value={searchText}
        placeholder="Search city"
        onChangeText={handleSearchCity}
        placeholderTextColor={'gray'}
        style={{ borderWidth: 1, borderColor: 'black', padding: 10 }}
      />
      {loading && <Text>Loading...</Text>}
    </>
  );
};
