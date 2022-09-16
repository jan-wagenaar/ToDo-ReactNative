// force the state to clear with fast refresh in Expo
// @refresh reset
import { useNavigation } from '@react-navigation/native';
import React, { createContext, useState, useEffect } from 'react';
import { database } from '../database/database'

export const ListsContext = createContext({});

export const ListsContextProvider = props => {
  // Initial values are obtained from the props

  const {
    initialLists,
    initialList,
    initialListItems,
    children
  } = props;

  const [lists, setLists] = useState(initialLists);
  const [currentList, setCurrentList] = useState(initialList);
  const [currentListItems, setCurrentListItems] = useState(initialListItems);

  useEffect(() => {
    refreshLists();
    if(currentList.id === 0) {
      setupList()
    }
  }, [] )

  const setupList = async () => {
    const { id } = await database.DBGetFirstListIdAsync();
    const initialListRec = await database.DBGetListById(id);
    setCurrentList(initialListRec);
    refreshCurrentListItems(id)
  }

  const refreshLists = () => {
    database.DBGetLists((lists) => setLists(lists));
  }

  const refreshCurrentList = async (id) => {
    const list = await database.DBGetListById(id);
    setCurrentList(list);
  }

  const refreshCurrentListItems = (id) => {
    database.DBGetListItems(id || currentList.id, (listItems) => setCurrentListItems(listItems));
  }


  // Make the context object:
  const listsContext = {
    lists,
    currentList,
    currentListItems,
    refreshLists,
    refreshCurrentList,
    refreshCurrentListItems
  };

  // pass the value in provider and return
  return <ListsContext.Provider value={listsContext}>{children}</ListsContext.Provider>;
};