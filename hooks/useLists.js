import React, { useContext } from 'react';
import { database } from '../database/database';

import { ListsContext } from "../context/lists-context";


const useLists = () => { 
    const { 
        currentListItems, 
        currentList, 
        setupNextList,
        refreshLists,
        refreshCurrentList,
        refreshCurrentListItems 
    } = useContext(ListsContext);

  const {
        DBGetLists,
        DBGetLastListId,
        DBGetListById,
        DBGetListItems,
        DBInsertList,
        DBUpdateListById,
        DBDeleteListById,
        DBInsertListItem,
        DBToggleListItem
    } = database

    const getLists = (setListsFunc) => {
        return DBGetLists(setListsFunc);
    }

    const getLastListId = (successFunc) => {
        return DBGetLastListId(successFunc);
    };

    const getListById = (id, setListFunc) => {
        return DBGetListById(id, setListFunc);
    }

    const getListItems = (itemId, setListItemsFunc) => {
        return DBGetListItems(itemId, setListItemsFunc);
    }

    const insertList = (successFunc) => {
        const newListRec = {
            name: 'New list',
            datetime: '2022-07-24 12:00:00'
        };

        const refreshCallback = (id) => {
            refreshLists();
            refreshCurrentList(id);
            refreshCurrentListItems(id);
            
            successFunc();
        }
        
        return DBInsertList(newListRec, refreshCallback);
    };

    const updateList = (listName, listId) => {
        const updatedListRec = {
            id: listId,
            name: listName,
            datetime: '2022-07-24 12:00:00'
        }
        
        return DBUpdateListById(updatedListRec)
    };

    const deleteList = () => {
        const OnAfterDelete = () => {
            refreshLists();
            setupNextList();
        };

        DBDeleteListById(currentList.id, OnAfterDelete);
    };

    const insertListItem = (listItemRec, successFunc) => {
        return DBInsertListItem(listItemRec, successFunc);
    };

    const toggleListItem = (listItemId, successFunc) => {
        return DBToggleListItem(listItemId, successFunc)
    };

    return {
        getLists,
        getLastListId,
        getListById,
        getListItems,
        insertList,
        updateList,
        deleteList,
        insertListItem,
        toggleListItem
    }
};

export default useLists;