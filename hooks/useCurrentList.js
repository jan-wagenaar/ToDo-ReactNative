import { useContext } from 'react';

import { ListsContext } from "../context/listsContext";


const useListItems = () => { 
    const { 
        currentListItems, 
        currentList, 
        refreshLists,
        refreshCurrentList,
        refreshCurrentListItems 
    } = useContext(ListsContext);

    const currentListActions = {
        currentListItems, 
        currentList, 
        refreshLists,
        refreshCurrentList,
        refreshCurrentListItems 
    }

    return currentListActions;
};

export default useListItems;