import React, {useState, useEffect, useContext } from 'react';
import { Text } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

import { ListsContext } from "../context/lists-context";
import useLists from '../hooks/useLists';
import { database } from '../database/database'
import StyledDrawerItem from './styled-drawer-item';
  
const DrawerContent = (props) => {
  const { lists, currentList, refreshLists, refreshCurrentList, refreshCurrentListItems } = useContext(ListsContext);
  const { insertList } = useLists();


  const setupNewList = () => {
    insertList((id) => {
      refreshLists();
      refreshCurrentList(id);
      refreshCurrentListItems(id);
      props.navigation.navigate('Home');
    });
  }

  const changeList = async (listId) => {
    await refreshCurrentList(listId);
    await refreshCurrentListItems(listId);
    props.navigation.navigate('Home');
  }

  const renderLists = () => {
    if(lists) {
      return (
        lists.map((object) => {
          return (
            <StyledDrawerItem
              key={object.id}
              label={object.name}
              onPress={() => changeList(object.id)}
              style={[currentList.id === object.id ? { color: '#fff', fontWeight: '600' } : undefined ]}
            />
          )
        })
      )
    } else {
      return (
        <Text>No lists yet</Text>
      )
    }
  }

    return (
      <>
        <DrawerContentScrollView {...props}>
          <Text 
              style={{ color: '#fff', fontSize: 32, margin: 22}}>
            Lists
          </Text>
          {renderLists()}
          <StyledDrawerItem
                label="+ Create list"
                onPress={setupNewList}
                type='button'
          />
        </DrawerContentScrollView>
      </>
    );
  };

  export default DrawerContent;