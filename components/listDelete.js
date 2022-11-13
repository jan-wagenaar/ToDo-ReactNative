import React from "react";
import { View, Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useActionSheet } from '@expo/react-native-action-sheet';

import useLists from "../hooks/useLists";
import useCurrentList from "../hooks/useCurrentList";

const actionSheetOptions = {
    options: ['Delete list', 'Cancel'],
    destructiveButtonIndex: 0,
    cancelButtonIndex:1,
    title: 'Are you sure you want to delete this list?'
}
 
const ListDelete = () => {
    const { deleteList } = useLists(); 
    const { currentList } = useCurrentList();
    const { showActionSheetWithOptions } = useActionSheet();
    
    const onClickDelete = () => {
        deleteList();
    };

    const onClickTrash = () => {
        showActionSheetWithOptions(actionSheetOptions, onClickDelete)
    };

    return (
        <View>
            {
                currentList && 
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
            }
        </View>
    )
};

export default ListDelete;