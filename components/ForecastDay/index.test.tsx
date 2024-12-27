import { render } from '@testing-library/react-native';
import { ForecastDay } from '.';

import data from '@/mocks/weather.json';

describe('ForecastDay Component', () => {
  test('renders correctly with given text', () => {
    const timeZone = 'Europe/Madrid';

    const r = render(
      <ForecastDay days={data.forecast.forecastday} timeZone={timeZone} />,
    );
    expect(r.getByText('Next hours forecast')).toBeTruthy();

    // Verifica que se rendericen 5 componentes
    const items = r.getAllByTestId('forecast-item');
    expect(items).toHaveLength(5);

    expect(r.getByText('8°')).toBeTruthy();
  });
});
