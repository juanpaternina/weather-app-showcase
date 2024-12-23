const BASE_URL = 'https://api.weatherapi.com/v1';

export enum API_TYPES {
  SEARCH = 'SEARCH',
  CURRENT = 'CURRENT',
  FORECAST = 'FORECAST',
}

export const API = {
  SEARCH: `${BASE_URL}/search.json`,
  CURRENT: `${BASE_URL}/current.json`,
  FORECAST: `${BASE_URL}/forecast.json`,
};
