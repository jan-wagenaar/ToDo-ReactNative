import React from "react";
import { Text, View } from 'react-native';

const HomeScreen = ({ route }) => {
    
    const { itemId } = route.params;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 32 }}>{itemId}</Text>
      </View>
    );
  };

  export default HomeScreen;