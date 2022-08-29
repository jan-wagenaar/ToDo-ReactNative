import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

import useLists from '../hooks/useLists';
import { database } from '../database/database'
import StyledDrawerItem from './styled-drawer-item';
  
const DrawerContent = (props) => {
  const { getLists, insertList } = useLists();
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getLists((listsArray) => { setLists(listsArray)});
  }, [] )

  const setupNewList = () => {
    insertList((id) => {
      getLists((listsArray) => { setLists(listsArray)});
      props.navigation.navigate('Home', { listId: id })
    });
  }
  
  const dropTables = async () => {
    await database.DBDropDatabaseTablesAsync();
  }

    return (
      <>
        <DrawerContentScrollView {...props}>
          <Text 
              style= {{ color: '#fff', fontSize: 22}}>
            List
          </Text>
          {lists.map((object) => {
            return (
              <StyledDrawerItem
                key={object.id}
                label={object.name}
                onPress={() => props.navigation.navigate('Home', { listId: object.id })}
              />
            )
          })}
          <StyledDrawerItem
                label="+ New list"
                onPress={setupNewList}
          />
        </DrawerContentScrollView>
      </>
    );
  };

  export default DrawerContent;