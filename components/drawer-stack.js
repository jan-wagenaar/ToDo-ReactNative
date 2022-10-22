import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import TodoList from '../screens/todo-list';
import DrawerContent from './drawer-content';
import ListTitle from './list-title';
import ListDelete from './list-delete';


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
          initialParams={{ listId: 0 }}
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


