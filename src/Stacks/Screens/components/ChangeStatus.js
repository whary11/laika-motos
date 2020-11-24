import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { log } from '../../../Recursive/Log'
import { fontSize, primaryColor } from '../../../Recursive/Styles'

export default function ChangeStatus({order,action}) {
    log(order)
    return (
        <View style={{alignSelf: 'center'}}>
            <View style={{alignSelf: 'center', margin:30}}>
                <Image source={require('../../../../assets/img/motorcycle.png')} />
            </View>
            <View >
                <Text style={{color: primaryColor, fontSize:19, textAlign:"center"}}>¡Vamos hacer la entrega más rápida! </Text>
            </View>

            <View>
                <TouchableOpacity style={{justifyContent: "center", backgroundColor: order.status.color, marginTop:36, height:50, borderBottomEndRadius:20, borderBottomStartRadius:20, width:300}} onPress={action}>
                    <Text style={{textAlign:"center", color: "white", fontWeight:"bold", fontSize: fontSize+3}}>{order.status.name}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
