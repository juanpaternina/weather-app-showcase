import { API_KEY, requestCreator } from '.';
import { API, API_TYPES } from '@/constants/Api';

describe('Request Creator Helper', () => {
  test('Receivin a API TYPE should construct the right url', () => {
    expect(API[API_TYPES.SEARCH]).toBe(
      `https://api.weatherapi.com/v1/search.json`,
    );
    expect(API[API_TYPES.FORECAST]).toBe(
      `https://api.weatherapi.com/v1/forecast.json`,
    );

    expect(API[API_TYPES.CURRENT]).toBe(
      `https://api.weatherapi.com/v1/current.json`,
    );
  });

  test('It should receive parameters and convert it to the right format', () => {
    const params = {
      param1: 'value1',
      param2: 'value2',
      param3: 'value3',
    };

    const result = requestCreator(API_TYPES.SEARCH, params);
    expect(result).toBe(
      `${API[API_TYPES.SEARCH]}?key=${API_KEY}&param1=value1&param2=value2&param3=value3`,
    );
  });
});
