import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import 'react-native-reanimated';

import { Provider } from 'react-redux';
import { store } from '@/state/store';
import { Weather } from '@/screens/Weather';

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
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}
