import { useLayoutEffect, useState } from 'react';
import { useLoadingStatus } from './useLoadingStatus';
import { useErrorStatus } from './useErrorStatus';
import { requestCreator } from '@/helpers/requestCreator';
import { City } from '@/types/City';
import { API_TYPES } from '@/constants/Api';

interface SearchProps {
  query: string;
}

export const useSearch = (props: SearchProps) => {
  const { loading, updateLoadingState } = useLoadingStatus();
  const { error, errorMessage, updateErrorState } = useErrorStatus();

  const [data, setData] = useState<City[]>([]);

  useLayoutEffect(() => {
    updateLoadingState(true);

    fetch(
      requestCreator(API_TYPES.SEARCH, {
        q: props.query,
      }),
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        updateErrorState(true, "Couldn't fetch data, please try again later");
      })
      .finally(() => {
        updateLoadingState(false);
      });
  }, [props.query, updateErrorState, updateLoadingState]);

  return {
    data,
    error,
    errorMessage,
    loading,
  };
};
