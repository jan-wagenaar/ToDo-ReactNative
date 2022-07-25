import React from "react";
import { View, StyleSheet, Text, TextInput, FlatList } from "react-native";

const ListItem = ({ item }) => {
    console.log(item)
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        color: '#000',
        minHeight: 60,
        margin: 12,
        marginBottom: 32,
        borderWidth: 1,
        padding: 20,
    },
    title: {
        fontSize: 18
    }
});

export default ListItem;