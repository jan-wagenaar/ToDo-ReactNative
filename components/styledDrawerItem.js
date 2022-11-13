import React from "react";
import { DrawerItem } from '@react-navigation/drawer';
import { View, Text } from 'react-native';

const StyledDrawerItem = ({ label, type, isActive, onPress}) => {
    return (
        <DrawerItem
              label={() => <DrawerItemLabel label={label} type={type} isActive={isActive}/>}
              onPress={onPress}
            />
    )
};

const DrawerItemLabel = ({ label, type, isActive}) => {
    return (
        <View style={ 
            type == 'button' ? 
            { 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: 12, 
                backgroundColor: '#ff7a28', 
                borderRadius: 30 
                } 
            : undefined}>
        <Text 
            style={
                    [
                        isActive ? {
                            color: '#fff', 
                            fontWeight: '600'
                        } : undefined,
                        {color: '#fff', fontSize: 18}
                    ]
                }>
            {label}
        </Text>
        </View>
    )
};



  export default StyledDrawerItem;