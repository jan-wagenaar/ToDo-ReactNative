import React from 'react';
import { StyleSheet, Text } from "react-native";

export const DrawerTitle = ({ children }) => {
    return <Text 
                style={styles.drawerTitle}
            >
                {children}
            </Text>
}

export const EmptyListWarning = ({ children }) => {
    return <Text 
                style={styles.emptyList}
            >
                {children}
            </Text>
}

const styles = StyleSheet.create({
    drawerTitle: { 
        color: '#fff', 
        fontSize: 32, 
        margin: 22
    },
    emptyList: { 
        color: '#fff', 
        margin: 22
    },
});