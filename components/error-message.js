import React from "react";
import { View, StyleSheet, Text, TextInput, SafeAreaView } from "react-native";

const ErrorMessage = ({ errorMessage }) => {
    
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.smiley}>
                    😥
                </Text>
            </View>
            <Text style={styles.text}>
                {errorMessage}
            </Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    smiley: {
        fontSize: 64
    },
    text: {
        fontSize: 18,
        padding: 10,
        color: '#000'
    },
});

export default ErrorMessage;