import { useState } from 'react';
import { useErrorStatus } from './useErrorStatus';
import { useLoadingStatus } from './useLoadingStatus';

export const useAPI = <T>() => {
  const { loading, updateLoadingState } = useLoadingStatus();
  const { error, errorMessage, updateErrorState } = useErrorStatus();

  const [data, setData] = useState<T | null>(null);

  const fetchAPI = (request: string) => {
    updateLoadingState(true);
    fetch(request)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        updateErrorState(true, "Couldn't fetch data, please try again later");
        setData(null);
      })
      .finally(() => {
        updateLoadingState(false);
      });
  };

  return {
    data,
    error,
    errorMessage,
    loading,
    fetchAPI,
  };
};
