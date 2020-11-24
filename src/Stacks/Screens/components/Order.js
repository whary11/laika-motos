import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import Button from '../../../components/Button'
import { fontSize, primaryColor } from '../../../Recursive/Styles'

import {log} from '../../../Recursive/Log'


export default function Order(props) {

    const navigation = useNavigation()

    const goDetail = ()=>{
        navigation.navigate("OrderDetail")
    }
    const {order} = props
    return (
        <View style={{backgroundColor: "white",width:"90%", alignSelf:"center", padding:10, borderRadius:15}}>
            <View style={{flexDirection:"row", justifyContent: 'space-around',}}>
                <View>
                    <Image source={require("../../../../assets/img/bone.png")} />
                </View>
                <View style={{}}>
                    <Text style={{color: primaryColor, fontWeight:"bold", fontSize:fontSize}}>Pedido Nº XXXX</Text>
                    <Text style={{color: "#3B2260"}}>Cliente: Cesar Martinez</Text>
                    <Text style={{color: "#3B2260"}}>Dirección: Calle 32 # 4-06</Text>
                </View>
            </View>
            <View style={{
                        flexDirection:"row",
                        justifyContent:"space-between",
                        marginTop:20,
                        width:"100%",
                        marginBottom:10
                    }}>
                <Button text="Ver ruta" color="#3B2260" backgroundColor="#fff" />
                <Button text="Ver detalle" color="#fff" backgroundColor="#7B33FF" action={goDetail}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
