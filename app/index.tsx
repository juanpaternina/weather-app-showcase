import React, { useEffect, useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { Header } from '@/components/Header';
import { Date } from '@/components/Date';
import { Degrees } from '@/components/Degrees';
import { Condition } from '@/components/Condition';
import { Summary } from '@/components/Summary';
import { ForecastDay } from '@/components/ForecastDay';
import { useAppSelector } from '@/state/hooks';
import { RootState } from '@/state/store';
import { useFetchWeather } from '@/hooks/useFetchWeather';
import { useLocation } from '@/hooks/useLocation';

import moment from 'moment';
import { Subtitle } from '@/components/Core/Subtitle';

const ForecastContainer = styled.View`
  margin-top: 4px;
`;

export default function App() {
  //Effects
  const [initialSetup, setInitialSetup] = useState(false);

  //Hooks
  const { error, errorMessage, fetchWeather, data } = useFetchWeather();
  const { getLocation } = useLocation();

  // Selectors
  const userLocation = useAppSelector(
    (state: RootState) => state.weather.location,
  );

  const { color } = useAppSelector((state: RootState) => state.theme);

  // Memoize the date
  const date = useMemo(() => moment().format('dddd, D MMMM '), []);

  // Effects
  useEffect(() => {
    fetchWeather(userLocation.lat, userLocation.lng);
  }, [fetchWeather, userLocation.lat, userLocation.lng]);

  useEffect(() => {
    if (initialSetup) return;

    getLocation();
    setInitialSetup(true);
  }, [getLocation, initialSetup]);

  if (error || !data) {
    return <Subtitle>{errorMessage}</Subtitle>;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color, padding: 0 }}>
      <Header
        cityName={data.location.name}
        countryName={data.location.country}
      />
      <Date style={styles.date}>{date}</Date>
      <Condition
        condition={data.current.condition.text}
        conditionImage={data.current.condition.icon}
      />
      <Degrees degrees={data.current?.temp_c} />
      <Summary
        windSpeed={data.current?.wind_kph}
        humidity={data.current?.humidity}
        visibility={data.current?.vis_km}
        summary={`It feels like ${data.current.feelslike_c} degrees`}
      />
      <ForecastContainer>
        <ForecastDay
          days={data.forecast.forecastday}
          timeZone={data.location.tz_id}
        />
      </ForecastContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  date: {
    marginBottom: 14,
  },
});
