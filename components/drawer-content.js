import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';


const test = [{ name: 'test0', id: 1}, { name: 'test1', id: 2}, { name: 'test2', id: 3}]
  
const DrawerContent = (props) => {
    return (
      <>
        <DrawerContentScrollView {...props}>
          {test.map((object) => {
            return (
              <DrawerItem
                label={object.name}
                onPress={() => props.navigation.navigate('Home', { itemId: object.id })}
              />
            )
          })}
          <DrawerItem
                label="+ New list"
                onPress={() => props.navigation.navigate('Home', { itemId: 0 })}
              />
        </DrawerContentScrollView>
      </>

    );
  };

  export default DrawerContent;