import React from 'react';

import { Provider } from 'react-redux';
import { store } from '@/state/store';
import { Weather } from '@/screens/Weather';

export default function App() {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}
