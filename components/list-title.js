import React, {useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text, TextInput, SafeAreaView } from "react-native";

import useLists from "../hooks/useLists";
import { ListsContext } from "../context/lists-context";
import StyledListTitle from "./styled-list-title";

const ListTitle = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [listName, setListName] = useState('');

    const { updateList } = useLists(); 
    const { 
        currentList, 
        refreshLists,
        refreshCurrentList
      } = useContext(ListsContext);

 
    useEffect(() => {
        setListName(currentList.name);
    }, [currentList])

    const startEditingText = () => {
        setIsEditing(true);
    }

    const updateListName = (newName) => {
        setListName(newName)
    }

    const saveListName = () => {
        updateList(listName, currentList.id);
        setIsEditing(false); 
        refreshLists();
        refreshCurrentList(currentList.id);
    }
 
    return (
        <StyledListTitle
            listName={listName}
            isEditing={isEditing}
            startEditingText={startEditingText}
            updateListName={updateListName}
            saveListName={saveListName}
        />
    )
};

export default ListTitle;