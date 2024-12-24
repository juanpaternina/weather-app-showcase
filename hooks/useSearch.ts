import { requestCreator } from '@/helpers/requestCreator';
import { City } from '@/types/city';
import { API_TYPES } from '@/constants/Api';
import { useAPI } from './useAPI';

export const useSearch = () => {
  const { data, error, errorMessage, loading, fetchAPI } = useAPI<City[]>();

  const searchCity = (queryString: string) => {
    const requestURL = requestCreator(API_TYPES.SEARCH, {
      q: queryString,
    });
    fetchAPI(requestURL);
  };

  return {
    data,
    error,
    errorMessage,
    loading,
    searchCity,
  };
};
