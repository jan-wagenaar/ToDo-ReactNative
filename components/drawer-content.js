import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';


const test = [{ name: 'test0', id: 0}, { name: 'test1', id: 1}, { name: 'test2', id: 2}]
  
const DrawerContent = (props) => {
    return (
      <>
        <DrawerContentScrollView {...props}>
          {test.map((object) => {
            return (
              <DrawerItem
                key={object.id}
                label={object.name}
                onPress={() => props.navigation.navigate('Home', { listId: object.id })}
              />
            )
          })}
          <DrawerItem
                label="+ New list"
                onPress={() => props.navigation.navigate('Home', { listId: 0 })}
          />
        </DrawerContentScrollView>
      </>

    );
  };

  export default DrawerContent;