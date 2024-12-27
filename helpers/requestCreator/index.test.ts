import { API, API_TYPES } from '@/constants/Api';
import { requestCreator } from '.';
import { getAPIKey } from '@/helpers/config';

describe('requestCreator', () => {
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
      `${API[API_TYPES.SEARCH]}?key=${getAPIKey()}&param1=value1&param2=value2&param3=value3`,
    );
  });

  test('should create a request URL with the correct API key and parameters', () => {
    const type = 'SEARCH';
    const params = { city: 'London', units: 'metric' };
    const expectedUrl =
      'https://api.weatherapi.com/v1/search.json?key=mocked_api_key&city=London&units=metric';

    const url = requestCreator(type, params);

    expect(url).toBe(expectedUrl);
  });
});
