import React from "react";
import { View, StyleSheet, Text, TextInput, FlatList } from "react-native";

import ListItem from "./listitem";

const List = ({items}) => {
    return (
    <FlatList
        data={items}
        renderItem={ListItem}
        keyExtractor={item => item.id}
      />
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

export default List;