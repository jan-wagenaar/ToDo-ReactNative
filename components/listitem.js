import React from "react";
import { View, StyleSheet, Text, Pressable, Vibration } from "react-native";

import useLists from "../hooks/useLists";
import Checkbox from "./checkbox";

const ListItem = ({ item, refreshFunc }) => {
    const { toggleListItem } = useLists();

    const toggleItem = () => {
        Vibration.vibrate([50]);
        toggleListItem(item.id, refreshFunc);
    }

    return (
        <View style={styles.container}>
            <Pressable 
                style={styles.toggle}
                onPress={toggleItem}
            >
                <Checkbox isChecked={item.is_completed} />
                <Text 
                    style={[styles.title, item.is_completed ? styles.itemCompleted : null]}
                >
                    {item.name}
                </Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        padding: 16,
        margin: 10,
        marginBottom: 0,
        backgroundColor: '#e4e0fd',
        borderBottomWidth: 1,
        borderBottomColor: '#dee2e6',
        borderRadius: 5,
    },
    toggle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexBasis: 0
    },
    title: {
        fontSize: 18,
    },
    itemCompleted: {
        textDecorationLine: 'line-through'
    },
  });

export default ListItem;