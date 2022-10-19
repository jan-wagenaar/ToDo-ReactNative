import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import { ListsContextProvider } from './context/lists-context';
import useDatabase from './hooks/useDatabase';
import DrawerStack from './components/drawer-stack';
import ErrorMessage from './components/error-message';

const initialList = {
  id: 0
}

const App = () => {
  SplashScreen.preventAutoHideAsync(); //don't let the splash screen hide
  const isDBLoadingComplete = useDatabase();

  if (isDBLoadingComplete) {
    SplashScreen.hideAsync();

    return (
      <ListsContextProvider
        initialList={initialList}
      >
        <ActionSheetProvider>
          <DrawerStack />
        </ActionSheetProvider>
      </ListsContextProvider>
    );
  } else {
    return (
      <ErrorMessage 
        errorMessage="App cannot be loaded"
      />
    );
  }
}

export default App;