import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import { ListsContextProvider } from './context/listsContext';
import useDatabase from './hooks/useDatabase';
import DrawerStack from './components/drawerStack';
import ErrorMessage from './components/errorMessage';

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