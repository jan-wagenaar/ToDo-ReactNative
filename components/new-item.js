import React from "react";
import { StyleSheet, TextInput, View } from 'react-native';

import useListItems from "../hooks/useListItems";
import Checkbox from "./checkbox";

const ListItemInput = ({ listId, refreshFunc }) => {
    const [itemName, SetItemName] = React.useState('');
    const { insertListItem } = useListItems();

    const insertNewListItem = () => {
        insertListItem({ listId: listId, name: itemName, dateTime: '2022-07-24 12:00:00' }, () => refreshFunc(listId));
        SetItemName('')
    };

    return (
            <View style={styles.container}>
                <Checkbox isChecked={false} />
                <TextInput
                    style={styles.textInput}
                    onChangeText={SetItemName}
                    onSubmitEditing={insertNewListItem}
                    placeholder="Add task"
                    placeholderTextColor="#666"
                    clearButtonMode="while-editing"
                    value={itemName}
                />
            </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#fff',
        padding: 32,
        paddingTop: 20,
        paddingBottom: 20
    },
    textInput: {
        flex: 1,
        height: 60,
        marginLeft: 8,
        fontSize: 18,
      },
  })
  
export default ListItemInput;