import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'

export default function Button(props) {
    const {text, color, action, backgroundColor, width, height, fontSize, fontWeight, image } = props
    return (
        <TouchableOpacity style={{backgroundColor, padding:10, borderRadius:10, width:width?width:100, height, justifyContent: 'center',}} onPress={action}>
            {image && <Image style={{marginTop:-20,marginBottom:-45, alignSelf:"center"}}   source={require('../../assets/img/bone-2.png')} />}
            <Text style={{color, textAlign:"center", fontSize, fontWeight}}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})
