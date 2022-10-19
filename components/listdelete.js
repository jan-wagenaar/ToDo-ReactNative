import React from "react";
import { Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useActionSheet } from '@expo/react-native-action-sheet';

import useLists from "../hooks/useLists";

const actionSheetOptions = {
    options: ['Delete list', 'Cancel'],
    destructiveButtonIndex: 0,
    cancelButtonIndex:1,
    title: 'Are you sure you want to delete this list?'
}
 
const ListDelete = () => {
    const { deleteList } = useLists(); 
    const { showActionSheetWithOptions } = useActionSheet();
    
    const onClickDelete = () => {

    }

    const onClickTrash = () => {
        showActionSheetWithOptions(actionSheetOptions, onClickDelete)
    }

    const options = ['Delete', 'Save', 'Cancel'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    return (
        <Pressable
            onPress={onClickTrash}
            style={{padding: 20}}
        >
            <FontAwesome 
                name="trash-o" 
                size={24} 
                color="white" 
            />
        </Pressable>
    )
};

export default ListDelete;