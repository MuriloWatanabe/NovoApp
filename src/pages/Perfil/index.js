import React from "react";
import {View, Text, StyleSheet} from 'react-native'

export default function Perfil() {
    return (
       <View style={StyleSheet.container}>
        <Text>Perfil</Text>
       </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});