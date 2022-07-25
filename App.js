import React from 'react';
import * as SplashScreen from 'expo-splash-screen';

import useDatabase from './hooks/useDatabase';
import DrawerStack from './components/drawer-stack';
import ErrorMessage from './components/error-message';

const App = () => {
  SplashScreen.preventAutoHideAsync(); //don't let the splash screen hide
  const isDBLoadingComplete = useDatabase();

  if (isDBLoadingComplete) {
    SplashScreen.hideAsync();

    return (
      <DrawerStack />
      // <EventsContextProvider>
      //   <ActionSheetProvider>
      //     <ToDoStack />
      //   </ActionSheetProvider>
      // </EventsContextProvider>
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