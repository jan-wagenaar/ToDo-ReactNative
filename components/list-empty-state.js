import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';

import useLists from "../hooks/useLists";
import Button from "./button";

const ListEmptyState = () => {
    const { insertList } = useLists();
    const navigation = useNavigation();

    const addList = () => {
        insertList(() => navigation.navigate('Home'))
    }

    return (
    <View 
        style={styles.emptyList}
    >
        <Text 
            style={styles.text}>
                No list created yet.
        </Text>
        <Button 
            label='+ Create list'
            onPress={addList}
        />
    </View>
    )
};

const styles = StyleSheet.create({
    emptyList: {
        flex: 1,
        backgroundColor: '#3441fc',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 18

    }
});

export default ListEmptyState;