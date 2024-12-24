import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import 'react-native-reanimated';

import { City } from '@/components/City';
import { Date } from '@/components/Date';
import { Degrees } from '@/components/Degrees';
import { Condition } from '@/components/Condition';
import { Summary } from '@/components/Summary';
import { ForecastDay } from '@/components/ForecastDay';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    regular: require('../assets/fonts/OpenSans-Regular.ttf'),
    bold: require('../assets/fonts/OpenSans-Bold.ttf'),
    light: require('../assets/fonts/OpenSans-Light.ttf'),
    medium: require('../assets/fonts/OpenSans-Medium.ttf'),
    semibold: require('../assets/fonts/OpenSans-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
      <City style={stlyes.city}>Paris, France</City>
      <Date style={stlyes.date}>Friday, 20 January </Date>
      <Condition
        condition="Partly cloud"
        conditionImage="//cdn.weatherapi.com/weather/64x64/day/122.png"
      />
      <Degrees degrees={34} />
      <Summary summary="It feel like 5 degrees hotter than actual temperature." />
      <ForecastDay />
    </SafeAreaView>
  );
}

const stlyes = StyleSheet.create({
  city: {
    marginTop: 30,
    marginBottom: 4,
  },
  date: {
    marginBottom: 24,
  },
});
