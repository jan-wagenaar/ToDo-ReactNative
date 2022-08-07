import React from "react";
import { View, StyleSheet, Text, TextInput, FlatList } from "react-native";

const ListItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#dee2e6'
    },
    title: {
        fontSize: 18,
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center'
    }
  });

export default ListItem;