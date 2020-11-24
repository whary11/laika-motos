import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {fontSize, primaryColor} from '../../../Recursive/Styles'

export default function NotOrders() {
    return (
        <View>
            <View styles={styles.imageContainer}>
                <Image style={styles.image} source={require("../../../../assets/img/not-orders.png")} /> 
            </View>
            <View style={{marginTop:100, width:350, alignSelf:"center"}}>
                <Text style={styles.textOops}>Oops!</Text>
                <Text style={{color:"#3B2260", fontSize:fontSize, textAlign: "center"}}>En estos momentos no tienes domicilios, preparate que ya están en alistamiento.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textOops:{
        fontSize: fontSize+10,
        fontWeight: "bold",
        color: "#0C233C",
        textAlign: "center",
        margin:40
    },
    
    image:{
        alignSelf: "center",
        padding:100,
        marginTop:50
    }
})
