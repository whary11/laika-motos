import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function Support() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Support</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
