import { Forecastday } from '@/types/api/weather';
import { FormattedForcast } from '@/types/forecast';

import moment from 'moment-timezone';

export const forecastFormat = (
  forecastDays: Forecastday[],
  timeZone: string,
): FormattedForcast[] => {
  const formattedHour = moment().tz(timeZone).format('YYYY-MM-DD HH:00:00');
  const formattedHour2 = moment()
    .tz(timeZone)
    .add(5, 'hour')
    .format('YYYY-MM-DD HH:00:00');

  const data_in_hours = forecastDays.flatMap((day) => day.hour);

  return data_in_hours
    .filter((hour) => {
      if (hour.time >= formattedHour && hour.time <= formattedHour2) {
        return hour;
      }
    })
    .map((hour) => ({
      hour: moment(hour.time).format('HH:mm'),
      conditionIcon: `https:${hour.condition.icon}`,
      degree: hour.temp_c,
    }));
};
