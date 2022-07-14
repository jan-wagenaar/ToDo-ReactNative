import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const ListForm = () => {
    const [listName, onChangelistName] = React.useState(null);

    return (
        <View key="939394">
            <Text>Add new item list</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangelistName}
                value={listName}
                placeholder="useless placeholder"
                keyboardType="numeric"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        marginBottom: 32,
        borderWidth: 1,
        padding: 10,
    },
});

export default ListForm;