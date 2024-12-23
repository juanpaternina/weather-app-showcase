import { API, API_TYPES } from '@/constants/Api';
export const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const requestCreator = (
  type: keyof typeof API_TYPES,
  params: Record<string, number | string>,
): string => {
  const queryString = Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join('&');
  return `${API[type]}?key=${API_KEY}&${queryString}`;
};
