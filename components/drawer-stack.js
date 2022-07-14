import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/homescreen';
import DrawerContent from './drawer-content';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerContent={(props) => <DrawerContent {...props} />}
        drawerStyle={{ height: 100 }}
    >
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          initialParams={{ itemId: 0 }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerStack;


