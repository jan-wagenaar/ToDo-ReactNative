import React from "react";
import { StyleSheet, Button, Text, TextInput, View, SafeAreaView } from 'react-native';

import useLists from "../hooks/useLists";

const ListItemInput = ({ listId, refreshFunc }) => {
    const [itemName, onChangeItemName] = React.useState();
    const { insertListItem } = useLists();

    const insertNewListItem = () => {
        insertListItem({ listId: listId, name: itemName, dateTime: '2022-07-24 12:00:00' }, refreshFunc);
        onChangeItemName('')
    };

    return (
        <SafeAreaView>
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
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 24
    },
    textInput: {
        flex: 1,
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 64
      },
  })
  
export default ListItemInput;