import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fontSize, primaryColor } from '../../Recursive/Styles'

export default function Comments() {
    return (
        <View style={{flex:1, justifyContent: 'center', alignSelf: "center"}}>
            <Text style={{color: primaryColor, fontSize: fontSize, fontWeight: "bold" }}>Comentarios sobre la orden</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({})
