import React from "react";
import { StyleSheet, Button, Text, TextInput, View, SafeAreaView } from 'react-native';

import useLists from "../hooks/useLists";

const ListItemInput = ({ listId, refreshFunc }) => {
    const [text, onChangeText] = React.useState();
    const { insertListItem } = useLists();

    const insertNewListItem = () => {
        insertListItem({ listId: listId, name: text, dateTime: '2022-07-24 12:00:00' }, refreshFunc)
    };

    return (
        <SafeAreaView style={styles.container}>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}
            placeholder="Username"
            value={text}
          />
          <View style={styles.btnContainer}>
            <Button
                onPress={insertNewListItem}
                title="Add item"
                color="#841584"

            />
          </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        // marginBottom: 60
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
      },
  })
  
export default ListItemInput;