import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native'
import { ButtonGroup, Button } from 'react-native-elements'
import { fontSize } from '../../../Recursive/Styles'


export default function SelectTimeZone() {
    const buttons = ["Filtrar"]

    const updateIndex = (index) => {
        setButtonSelected(index)
        if(index == 1){ // Si es igual a filtrar filtramos
            setVisible(true)
            log(index, buttons[index],visible)
        }
    }
    return (
        <SafeAreaView style={{flex:1}}>
            <ButtonGroup
                textStyle={{color:"#515CF4", fontWeight:"bold", fontSize:fontSize}}
                selectedIndex={0}
                buttons={buttons}
                containerStyle={{height: 40, borderColor:"#fff"}}
                selectedButtonStyle={{backgroundColor:"#fff"}}
                selectedTextStyle={{color:"#515CF4"}}
                // onPress={updateIndex}
            />

            <View style={{flex:1, justifyContent: 'center',}}>
                <Text style={{textAlign: "center"}}>Filtros</Text>


            </View>
                <TouchableOpacity style={{
                    alignItems:'center',
                    justifyContent:'center',
                    position: 'absolute',                                          
                    bottom: 30,                                                    
                    width:"100%"
                }}>
                        <Button title="Aplicar" buttonStyle={{
                            backgroundColor: "#DADEE3",
                            width:300
                        }} />
                </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
