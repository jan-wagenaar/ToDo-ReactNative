import React from "react";
import { Platform, KeyboardAvoidingView, StyleSheet, Button, Text, TextInput, View, SafeAreaView } from 'react-native';

import useLists from "../hooks/useLists";

const ListItemInput = ({ listId, refreshFunc }) => {
    const [itemName, onChangeItemName] = React.useState();
    const { insertListItem } = useLists();

    const insertNewListItem = () => {
        insertListItem({ listId: listId, name: itemName, dateTime: '2022-07-24 12:00:00' }, refreshFunc);
        onChangeItemName()
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.view}
        >
            <View style={styles.container}>
                <TextInput
                style={styles.textInput}
                onChangeText={onChangeItemName}
                placeholder="Username"
                value={itemName}
                />
                <View style={styles.btnContainer}>
                    <Button
                        onPress={insertNewListItem}
                        title="Add item"
                        color="#841584"
                            />
                    </View>
                </View>
          </KeyboardAvoidingView> 
    )
};

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 24,
        backgroundColor: '#fff'
    },
    textInput: {
        flex: 1,
        height: 40,
        borderColor: "#000",
        borderBottomWidth: 1,
        // marginBottom: 64
      },
  })
  
export default ListItemInput;