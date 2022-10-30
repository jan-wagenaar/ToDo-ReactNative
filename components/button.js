import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

const Button = ({ label, onPress }) => {
    return (
        <Pressable 
            onPress={onPress}
            style={styles.button}
            >
            <Text
                style={styles.text}
            >
                {label}
            </Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 32,
        padding: 12,
        minWidth: 150, 
        backgroundColor: '#ff7a28', 
        borderRadius: 30 
    },
    text: {
        color: '#fff',
        fontSize: 18
    }
});

export default Button;