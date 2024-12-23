import { useState } from 'react';
import { useLoadingStatus } from './useLoadingStatus';
import { useErrorStatus } from './useErrorStatus';
import { requestCreator } from '@/helpers/requestCreator';
import { City } from '@/types/City';
import { API_TYPES } from '@/constants/Api';

export const useSearch = () => {
  const { loading, updateLoadingState } = useLoadingStatus();
  const { error, errorMessage, updateErrorState } = useErrorStatus();

  const [data, setData] = useState<City[]>([]);

  const searchCity = (queryString: string): City[] => {
    updateLoadingState(true);

    fetch(
      requestCreator(API_TYPES.SEARCH, {
        q: queryString,
      }),
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch(() => {
        updateErrorState(true, "Couldn't fetch data, please try again later");
        setData([]);
      })
      .finally(() => {
        updateLoadingState(false);
      });
    return data;
  };

  return {
    data,
    error,
    errorMessage,
    loading,
    updateLoadingState,
    searchCity,
  };
};
