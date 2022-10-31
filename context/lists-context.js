// force the state to clear with fast refresh in Expo
// @refresh reset
import React, { createContext, useState, useEffect } from 'react';
import { database } from '../database/database'

export const ListsContext = createContext({});

export const ListsContextProvider = props => {
  // Initial values are obtained from the props

  const {
    initialLists,
    initialListItems,
    children
  } = props;

  const [lists, setLists] = useState(initialLists);
  const [currentList, setCurrentList] = useState();
  const [currentListItems, setCurrentListItems] = useState(initialListItems);

  useEffect(() => {
    refreshLists();
    if(currentList === undefined) {
      setupNextList()
    }
  }, [] )

  const setupNextList = async () => {
    const id = await database.DBGetLastListId();
    refreshCurrentList(id)
    refreshCurrentListItems(id);
  }

  const refreshLists = () => {
    database.DBGetLists((lists) => setLists(lists));
  }

  const refreshCurrentList = (id) => {
    if(id === undefined) {
      setCurrentList(undefined);
    } else {
      database.DBGetListById(id, (list) => setCurrentList(list));
    }
  }

  const refreshCurrentListItems = (id) => {
    if(id === undefined && currentList === undefined) {
      database.DBGetListItems(0, (listItems) => setCurrentListItems(listItems));
    } else {
      database.DBGetListItems(id || currentList.id, (listItems) => setCurrentListItems(listItems));
    }
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