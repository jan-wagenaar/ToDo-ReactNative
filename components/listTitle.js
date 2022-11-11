import React, {useState, useEffect } from "react";

import useLists from "../hooks/useLists";
import useCurrentList from "../hooks/useCurrentList";
import StyledListTitle from "./styledListTitle";

const ListTitle = () => {
    const [listName, setListName] = useState('');

    const { updateList } = useLists(); 
    const { 
        currentList, 
        refreshLists,
        refreshCurrentList
      } = useCurrentList();

    useEffect(() => {
        if(currentList) {
            updateListName(currentList.name);
        } else {
            updateListName('')
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