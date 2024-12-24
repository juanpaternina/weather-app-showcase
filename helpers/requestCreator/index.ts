import { API, API_TYPES } from '@/constants/Api';
// export const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
//TODO: Use ENV VARIABLES instead of hardcoded values
export const API_KEY = 'c08ca7fa27ea453fb2c145802242312';

export const requestCreator = (
  type: keyof typeof API_TYPES,
  params: Record<string, number | string>,
): string => {
  if (API_KEY === '' || API_KEY === undefined) {
    throw new Error('API_KEY is not defined');
  }

  const queryString = Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join('&');
  return `${API[type]}?key=${API_KEY}&${queryString}`;
};
