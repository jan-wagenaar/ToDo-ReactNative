import React from "react";
import { StyleSheet, TextInput, View } from 'react-native';

import Checkbox from "./checkbox";

const StyledToDoItemForm = ({ itemName, SetItemName, insertNewListItem }) => {
    return (
            <View style={styles.container}>
                <Checkbox isChecked={false} />
                <TextInput
                    value={itemName}
                    style={styles.textInput}
                    onChangeText={SetItemName}
                    onSubmitEditing={insertNewListItem}
                    placeholder="Add task"
                    placeholderTextColor="#666"
                    clearButtonMode="while-editing"
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
  
export default StyledToDoItemForm;