import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';
import { NativeBaseProvider } from "native-base";
import '../assets/style/global.css';

export default function RootLayout() {
    return (
        <NativeBaseProvider>
                <StatusBar
                    barStyle="dark-content" 
                    backgroundColor="#f5f5f5" 
                    hidden={false} 
                />
                <SafeAreaView style={styles.container}>
                    <Slot />
                </SafeAreaView>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
