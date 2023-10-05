import React from 'react';
import { View, Text, StyleSheet, TextComponent } from 'react-native';

export default function Store() {
    return (
        <View style={StyleSheet.container}>
            <Text>Store!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})