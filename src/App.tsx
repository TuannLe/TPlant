import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './presentation/navigation'
import store, { persistor } from './core/redux/store';
import { RootSiblingParent } from 'react-native-root-siblings';

function App(): JSX.Element {
  return (
    <RootSiblingParent>
      <SafeAreaProvider >
        <StatusBar />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigation />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </RootSiblingParent>
  );
}

export default App;
