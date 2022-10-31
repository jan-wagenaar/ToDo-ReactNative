import { useContext } from 'react';

import { ListsContext } from "../context/lists-context";


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