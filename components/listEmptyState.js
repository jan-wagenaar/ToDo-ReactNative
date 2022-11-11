import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

import useLists from "../hooks/useLists";
import Button from "./button";
import EmptyImage from "../assets/reminder.png"

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
        <Image
            style={styles.placeholderImage}
            resizeMode='contain'
            source={EmptyImage}
        />
        <Text 
            style={styles.text}>
                No list created yet
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
        fontSize: 22,
        marginBottom: 20

    },
    placeholderImage: {
        width: 300,
        height: 300,
        marginBottom: 20
        }
});

export default ListEmptyState;