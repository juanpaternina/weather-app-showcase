import { render } from '@testing-library/react-native';
import { ForecastDay } from '.';

import data from '@/mocks/weather.json';

jest.mock('moment-timezone', () => {
  const actualMoment = jest.requireActual('moment-timezone');
  return () => actualMoment('2024-12-24T05:00:00Z'); // Fecha fija para las pruebas
});

describe('ForecastDay Component', () => {
  test('renders correctly with given text', () => {
    const timeZone = 'Europe/Madrid';
    const r = render(
      <ForecastDay days={data.forecast.forecastday} timeZone={timeZone} />,
    );
    const items = r.getAllByTestId('forecast-item');

    expect(r.getByText('Next hours forecast')).toBeTruthy();
    // Check wheather 5 item are rendered.

    expect(items).toHaveLength(5);
    expect(r.getByText('5.7°')).toBeTruthy();
  });
});
