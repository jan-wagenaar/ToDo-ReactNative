import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import TodoList from '../screens/todoList';
import DrawerContent from './drawerContent';
import ListTitle from './listTitle';
import ListDelete from './listDelete';


const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#000',
          },
          headerStyle: { 
            backgroundColor: '#000',
            height: 120
          }
        }}
    >
        <Drawer.Screen 
          name="Home" 
          component={TodoList} 
          options={
            { 
              headerTitle: (props) => <ListTitle {...props} />,
              headerRight: () => <ListDelete />
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerStack;


