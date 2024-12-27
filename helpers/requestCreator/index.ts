import { API, API_TYPES } from '@/constants/Api';
import { getAPIKey } from '../config';

export const requestCreator = (
  type: keyof typeof API_TYPES,
  params: Record<string, number | string>,
): string => {
  const API_KEY = getAPIKey();

  const queryString = Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join('&');
  return `${API[type]}?key=${API_KEY}&${queryString}`;
};
