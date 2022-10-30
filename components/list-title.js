import React, {useState, useEffect, useContext } from "react";

import useLists from "../hooks/useLists";
import { ListsContext } from "../context/lists-context";
import StyledListTitle from "./styled-list-title";

const ListTitle = () => {
    const [listName, setListName] = useState('');

    const { updateList } = useLists(); 
    const { 
        currentList, 
        refreshLists,
        refreshCurrentList
      } = useContext(ListsContext);

    useEffect(() => {
        if(currentList) {
            setListName(currentList.name);
        } else {
            setListName('')
        }
    }, [currentList])

    const updateListName = (newName) => {
        setListName(newName)
    }

    const saveListName = () => {
        updateList(listName, currentList.id);
        refreshLists();
        refreshCurrentList(currentList.id);
    }
 
    return (
        <StyledListTitle
            listName={listName}
            updateListName={updateListName}
            saveListName={saveListName}
        />
    )
};

export default ListTitle;