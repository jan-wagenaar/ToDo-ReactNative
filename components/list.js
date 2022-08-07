import React from "react";
import { View, StyleSheet, Text, TextInput, FlatList } from "react-native";

import ListItem from "./listitem";

const List = ({items}) => {
    return (
    <FlatList
        data={items}
        renderItem={ListItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    )
};

const styles = StyleSheet.create({
    list: {
        // flex: 1,
        width: '100%'
    }
});

export default List;