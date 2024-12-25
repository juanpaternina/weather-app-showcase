import { Forecastday } from '@/types/api/weather';
import { Forecast } from '@/types/forecast';
import moment from 'moment';

export const forecastFormat = (forecastDays: Forecastday[]): Forecast[] => {
  return forecastDays.slice(1, 6).map((forecastDay) => {
    return {
      degree: forecastDay.day.avgtemp_c,
      conditionIcon: `https:${forecastDay.day.condition.icon}`,
      date: moment(forecastDay.date).format('DD MMM'),
    };
  });
};
