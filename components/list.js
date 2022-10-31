import React from "react";
import { View, StyleSheet, Text, TextInput, FlatList } from "react-native";

import ListItem from "./listItem";

const List = ({ items, refreshFunc }) => {
    return (
    <FlatList
        data={items}
        renderItem={(renderItem) => <ListItem item={renderItem.item} refreshFunc={refreshFunc} />}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    )
};

const styles = StyleSheet.create({
    list: {
        width: '100%'
    }
});

export default List;