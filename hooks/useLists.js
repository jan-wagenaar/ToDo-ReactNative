import { useContext } from 'react';
import { database } from '../database/database';
import { formatISO9075 } from 'date-fns'

import { ListsContext } from "../context/listsContext";


const useLists = () => { 
    const { 
        lists,
        currentList, 
        refreshLists,
        setupNextList,
        refreshCurrentList,
        refreshCurrentListItems 
    } = useContext(ListsContext);

  const {
        DBInsertList,
        DBUpdateListById,
        DBDeleteListById,
    } = database

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
        const currDate = formatISO9075(new Date());
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

    return {
        lists,
        insertList,
        updateList,
        deleteList
    }
};

export default useLists;