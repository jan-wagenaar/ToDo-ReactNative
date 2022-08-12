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
  const [listItems, setListItems] = useState(initialListItems);

  useEffect(() => {
    refreshLists();
    if(currentList.id === 0) {
      setupList()
    }
  }, [] )

  const setupList = async () => {

    const { id } = await database.DBGetFirstListIdAsync();
    console.log("Initial list id")
    console.log(id);
    const initialListRec = await database.DBGetListById(id);
    console.log("Initial list rec")
    console.log(initialListRec);
    setCurrentList(initialListRec);
    refreshListItems(id)
  }

  const refreshLists = () => {
    database.DBGetLists((lists) => setLists(lists));
  }

  const refreshCurrentList = (id) => {
    database.DBGetListById(id, (list) => setCurrentList(list));
  }

  const refreshListItems = (id) => {
    database.DBGetListItems(id, (listItems) => setListItems(listItems));
  }


  // Make the context object:
  const listsContext = {
    lists,
    currentList,
    listItems
  };

  // pass the value in provider and return
  return <ListsContext.Provider value={listsContext}>{children}</ListsContext.Provider>;
};