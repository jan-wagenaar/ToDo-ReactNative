import React, {useState, useEffect} from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import useLists from '../hooks/useLists';
import { database } from '../database/database'
  
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
          {lists.map((object) => {
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
                onPress={setupNewList}
          />
                    <DrawerItem
                label="Drop tables"
                onPress={dropTables}
          />
        </DrawerContentScrollView>
      </>
    );
  };

  export default DrawerContent;