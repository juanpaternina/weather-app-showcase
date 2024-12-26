import moment from 'moment-timezone';
import { forecastFormat } from '.';
import { Forecastday } from '@/types/api/weather';

describe('forecastFormat', () => {
  const mockTimeZone = 'UTC';
  const currentTime = moment().tz(mockTimeZone);

  const mockForecastDays: Forecastday[] = [
    {
      hour: [
        {
          time: currentTime.format('YYYY-MM-DD HH:00:00'),
          temp_c: 20,
          condition: {
            icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
          },
        },
        {
          time: currentTime.add(2, 'hour').format('YYYY-MM-DD HH:00:00'),
          temp_c: 22,
          condition: {
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
          },
        },
        {
          time: currentTime.add(6, 'hour').format('YYYY-MM-DD HH:00:00'),
          temp_c: 25,
          condition: {
            icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
          },
        },
      ],
    },
  ];

  it('should format forecast data correctly', () => {
    const result = forecastFormat(mockForecastDays, mockTimeZone);

    expect(result.length).toBe(2);
    expect(result[0]).toEqual({
      hour: moment(mockForecastDays[0].hour[0].time).format('HH:mm'),
      conditionIcon: 'https://cdn.weatherapi.com/weather/64x64/day/116.png',
      degree: 20,
    });
  });

  it('should filter hours outside the time range', () => {
    const result = forecastFormat(mockForecastDays, mockTimeZone);

    expect(result).not.toContainEqual(
      expect.objectContaining({
        degree: 25,
      }),
    );
  });
});
