import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

import useLists from "../hooks/useLists";

const ListItem = ({ item, refreshFunc }) => {
    const { toggleListItem } = useLists();

    return (
        <Pressable onPress={() => toggleListItem(item.id, refreshFunc)}>
            <View style={styles.container}>
                <Text style={[styles.title, item.is_completed ? styles.itemCompleted : null]}>{item.name}</Text>
            </View>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
      backgroundColor: '#e4e0fd',
      borderBottomWidth: 1,
      borderBottomColor: '#dee2e6'
    },
    title: {
        fontSize: 18,
    },
    itemCompleted: {
        textDecorationLine: 'line-through'
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center'
    }
  });

export default ListItem;