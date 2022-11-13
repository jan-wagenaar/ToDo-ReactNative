import { useContext } from 'react';
import { database } from '../database/database';
import { formatISO9075 } from 'date-fns'

import { ListsContext } from "../context/listsContext";


const useListItems = () => { 
    const { 
        currentList, 
        refreshCurrentListItems 
    } = useContext(ListsContext);

  const {
        DBInsertListItem,
        DBToggleListItem
    } = database

    const insertListItem = (itemName) => {
        const currDateTime = formatISO9075(new Date());
        const newListItemRec = { 
            listId: currentList.id, 
            name: itemName,
            datetime: currDateTime
        }

        const refreshCallback = (id) => {
            refreshCurrentListItems(id);
        }

        return DBInsertListItem(newListItemRec, refreshCallback);
    };

    const toggleListItem = (listItemId, successFunc) => {
        return DBToggleListItem(listItemId, successFunc)
    };

    return {
        insertListItem,
        toggleListItem
    }
};

export default useListItems;