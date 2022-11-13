import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "./listItem";

const List = ({ items }) => {
    return (
    <FlatList
        data={items}
        renderItem={(renderItem) => <ListItem item={renderItem.item} />}
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