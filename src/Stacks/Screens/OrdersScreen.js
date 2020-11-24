import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import Modal from '../../components/Modal'
import NotOrders from './components/NotOrders'

import {log} from '../../Recursive/Log'
import { fontSize, primaryColor } from '../../Recursive/Styles'
import SelectTimeZone from './components/SelectTimeZone'
import Order from './components/Order'
import SelectTimeZone2 from './components/SelectTimeZone2'

export default function OrdersScreen() {
    const [buttonSelected, setButtonSelected] = useState(0)
    const [visible, setVisible] = useState(false);
    const [filter, setFilter] = useState({});
    const [orders, setOrders] = useState([{},{},{},{},{},{},{},{},{}]);
    
    const buttons = ["Billetera", "Filtrar"]
    const updateIndex = (index) => {
        setButtonSelected(index)
        if(index == 1){ // Si es igual a filtrar abrimos el modal para hacer flujo de filtro
            setVisible(true)
            log(index, buttons[index],visible)
        }
    }

    useEffect(() => {
        log(filter)
    }, [filter])

    return (
        <SafeAreaView style={{
            marginBottom:40
        }}>
            <ButtonGroup
                textStyle={{color:"#515CF4", fontWeight:"bold", fontSize:fontSize-6}}
                selectedIndex={buttonSelected}
                buttons={buttons}
                containerStyle={{height: 40, borderRadius:8}}
                selectedButtonStyle={{backgroundColor:"#39EA98"}}
                selectedTextStyle={{color:"#FFFFFF"}}
                onPress={updateIndex}
            />
            <ScrollView>
            <View>
                <Text style={{color: primaryColor  , fontSize: fontSize, padding:15}}>Pedidos en curso  0 {filter.title}</Text>
            </View>
            {/* Seleccionar franja */}
            {/* <Modal
                visible={visible}
                setVisible={setVisible}
                fullScreen
                children={<SelectTimeZone />}
            /> */}
            <SelectTimeZone2
                visible={visible}
                setVisible={setVisible}
                setFilter={setFilter}
                />
            {/* Cuando hay ordenes */}
            {orders.length > 0 ?

                <View>
                    {orders.map((order, i) => <View key={i} style={{marginBottom:20}}><Order order={order}/></View> )}
                </View>
            :
            // {/* Cuando no hay ordenes */}
                <NotOrders />
            }
            </ScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
