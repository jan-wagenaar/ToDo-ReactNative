import React, {useEffect} from 'react';
import { database } from '../database/database'

const useLists = () => { 
  const {
        DBGetLists,
        DBGetListById,
        DBGetListItems,
        DBInsertList,
        DBInsertListItem
    } = database

    const getLists = (setListsFunc) => {
        return DBGetLists(setListsFunc);
    }

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

    const listItemToggle = (listItemId, successFunc) => {
        
    }

    return {
        getLists,
        getListById,
        getListItems,
        insertList,
        insertListItem
    }
}

export default useLists;