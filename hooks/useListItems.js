import { useContext } from 'react';
import { database } from '../database/database';

import { ListsContext } from "../context/listsContext";


const useListItems = () => { 
    const { 
        currentListItems, 
        currentList, 
        refreshLists,
        refreshCurrentList,
        refreshCurrentListItems 
    } = useContext(ListsContext);

  const {
        DBGetListItems,
        DBInsertListItem,
        DBToggleListItem
    } = database

    const getListItems = (itemId, setListItemsFunc) => {
        return DBGetListItems(itemId, setListItemsFunc);
    }

    const insertListItem = (listItemRec, successFunc) => {
        return DBInsertListItem(listItemRec, successFunc);
    };

    const toggleListItem = (listItemId, successFunc) => {
        return DBToggleListItem(listItemId, successFunc)
    };

    return {
        getListItems,
        insertListItem,
        toggleListItem
    }
};

export default useListItems;