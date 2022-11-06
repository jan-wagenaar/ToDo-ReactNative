import React from 'react';
import { Text } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

import useLists from '../hooks/useLists';
import useCurrentList from '../hooks/useCurrentList';
import StyledDrawerItem from './styled-drawer-item';

  
const DrawerContent = (props) => {
  const { 
    lists
  } = useLists();
  const { 
    currentList,  
    refreshCurrentList, 
    refreshCurrentListItems 
  } = useCurrentList();
  const { insertList } = useLists();

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
              style={[
                currentList.id === object.id 
                ? { color: '#fff', fontWeight: '600' } 
                : undefined ]}
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