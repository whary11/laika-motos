import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import { fontSize } from '../../Recursive/Styles'
import ChangeStatus from './components/ChangeStatus'
import { log } from '../../Recursive/Log'


export default function OrderDetail() {

    const [visible, setVisible] = useState(false)
    const buttons = ["Ver detalle"]

    const navigation = useNavigation()
    const goToProducts = () => {
        navigation.navigate("Products")
    }

    const showModal = () => {
        setVisible(!visible)
    }

    const goToTakePhoto = () => {
        setVisible(!visible)
        log("TakePhoto")
        navigation.navigate("TakePhoto")
    }
    return (
        <ScrollView>
            <SafeAreaView>
                <TouchableOpacity style={{backgroundColor:"white", width:350, alignSelf:"center", flexDirection:"row", padding:15, justifyContent:"space-around", borderRadius:10, marginBottom:20, marginTop:20}} onPress={() => navigation.navigate("Comments")} >
                    <Text style={{textAlign:"center", color:"#7941C0", fontSize:fontSize+2, fontWeight:"bold"}}>Ver comentario</Text>
                    <View style={{justifyContent:"center", backgroundColor:"#FDBED6", width:20,height:20, borderRadius:10}}>
                        <Text style={{textAlign:"center"}}>1</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.containerDetail} >
                    <View style={{padding:15, marginBottom:40, marginTop:15}}>
                        <Text style={{color:"#7941C0", fontSize:fontSize+2, fontWeight:"bold", marginBottom:10}}>Pedido Nº. 12345</Text>
                        <Text style={styles.textDetail}>Cliente: Cesar Martinez</Text>
                        <Text style={styles.textDetail}>Dirección: Calle 32 # 4-06</Text>
                        <Text style={styles.textDetail}>Complemento: Teusaquillo</Text>
                        <Text style={styles.textDetail}>Método de pago: Efectivo</Text>
                        <Text style={styles.textDetail}>Cliente: Cesar Martinez</Text>
                        <Text style={styles.textDetail}>Subtotal: $63,022</Text>
                        <Text style={styles.textDetail}>IVA: $15,604</Text>
                        <Text style={styles.textDetail}>Envío: $3,500</Text>
                    </View>

                    <View style={styles.footerDetail}>
                        <Text style={{textAlign:"center", fontWeight:"bold", fontSize:fontSize+5}}>Total: $82,126</Text>
                    </View>
                </View>


                <View style={{marginBottom:20,marginTop:20, alignSelf:"center"}}>
                    <Button text="Productos" color="#fff" backgroundColor="#7B33FF" width={400} height={60} fontSize={fontSize} fontWeight="bold" action={goToProducts} />
                </View>
                <View style={{marginBottom:20, alignSelf:"center"}}>
                    <Button text="Cambiar de estado" color="#fff" backgroundColor="#7B33FF" width={400} height={100} fontSize={fontSize} fontWeight="bold" image="../../../assets/img/bone-2.png"  action={showModal}/>
                </View>
            </SafeAreaView>
            <Modal visible={visible}  setVisible={setVisible} children={<ChangeStatus action={goToTakePhoto} order={{status:{name:"EN CAMINO", color: "#0099FF"}}}/>} overlayStyle={{height:300, width:300, borderRadius:20}} />

        </ScrollView>
    )
}



const styles = StyleSheet.create({
    containerDetail:{
        backgroundColor:"#FFFFFF",
        width:350,
        alignSelf:"center",
        justifyContent:"space-around",
        borderRadius:20,
        
    },
    textDetail:{
        color:"#3B2260",
        fontSize:fontSize-4,
        margin: 5,
    },
    footerDetail:{
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        backgroundColor:"#D3FBE8" ,//"#D3FBE8",
        bottom:8,
        width:"95%",
        height:40,
        justifyContent:"center",
        alignSelf:"center"
    }
})
