import React from 'react';
import { Text } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

import useLists from '../hooks/useLists';
import useCurrentList from '../hooks/useCurrentList';
import StyledDrawerItem from './styledDrawerItem';
import {DrawerTitle, EmptyListWarning} from './styledDrawerText';

  
const DrawerContent = (props) => {
  const { 
    lists,
    insertList
  } = useLists();

  const { 
    currentList,  
    refreshCurrentList, 
    refreshCurrentListItems 
  } = useCurrentList();

  const setupNewList = () => {
    insertList(() => {
      props.navigation.navigate('Home');
    });
  }

  const changeList = async (listId) => {
    await refreshCurrentList(listId);
    await refreshCurrentListItems(listId);
    props.navigation.navigate('Home');
  }

  const renderLists = () => {
    if(lists && currentList) {
      return (
        lists.map((object) => {
          return (
            <StyledDrawerItem
              key={object.id}
              label={object.name}
              onPress={() => changeList(object.id)}
              isActive = { currentList.id === object.id }
            />
          )
        })
      )
    } else {
      return (
        <EmptyListWarning>
          No lists yet
        </EmptyListWarning>
      )
    }
  }

    return (
      <>
        <DrawerContentScrollView {...props}>
          <DrawerTitle>
            Lists
          </DrawerTitle>
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