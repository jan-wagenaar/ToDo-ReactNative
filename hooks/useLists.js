import React, {useEffect} from 'react';
import { database } from '../database/database'

const useLists = () => { 
  const {
    DBGetLists,
    DBGetListById,
    DBGetListItems
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

    return {
        getLists,
        getListById,
        getListItems
    }
}

export default useLists;