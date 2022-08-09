import React, {useEffect} from 'react';
import { database } from '../database/database'

const useLists = () => { 
  const {
        DBGetLists,
        DBGetFirstListId,
        DBGetListById,
        DBGetListItems,
        DBInsertList,
        DBInsertListItem,
        DBToggleListItem
    } = database

    const getLists = (setListsFunc) => {
        return DBGetLists(setListsFunc);
    }

    const getFirstListId = (successFunc) => {
        return DBGetFirstListId(successFunc);
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
        }
        return DBInsertList(newListRec, successFunc);
    }

    const insertListItem = (listItemRec, successFunc) => {
        return DBInsertListItem(listItemRec, successFunc);
    }

    const toggleListItem = (listItemId, successFunc) => {
        return DBToggleListItem(listItemId, successFunc)
    }

    return {
        getLists,
        getFirstListId,
        getListById,
        getListItems,
        insertList,
        insertListItem,
        toggleListItem
    }
}

export default useLists;