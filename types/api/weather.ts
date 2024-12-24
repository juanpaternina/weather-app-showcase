import { Day } from '../day';
import { Location } from '../location';
import { Weather } from '../weather';

export interface WeatherAPI {
  location: Location;
  current: Weather;
  forecast: Forecast;
}

export interface Forecast {
  forecastday: Forecastday[];
}

export interface Forecastday {
  date: string;
  date_epoch: number;
  day: Day;
}
