import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Buttom from '../../components/Button'
import { fontSize, primaryColor } from '../../Recursive/Styles'
import { log } from '../../Recursive/Log'

import ImagePicker from 'react-native-image-picker'

export default function TakePhoto() {
    const [response, setResponse] = useState(null);
    const getPemission = () => {
        ImagePicker.launchCamera(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
            },
            (response) => {
              setResponse(response);
            },
          )

        log("status")

        
        // setHasPermission(status === 'granted');
    }


    return (
        <View style={{flex:1, justifyContent: 'center', alignSelf:"center"}}>
            <View style={{alignSelf: "center", marginTop:-150}}>
                <Image source={require('../../../assets/img/image-take-photo.png')} />
            </View>
            <View style={{width:270, alignSelf: "center", marginVertical:50}}>
                <Text style={{fontSize: fontSize-2, color: primaryColor, textAlign: "center", fontWeight: "bold" }}>Toma una foto de la dirección para verificar la entrega:</Text>
            </View>
            <View style={{alignSelf: "center"}}>
                <Buttom text="Tomar foto" backgroundColor="#7B33FF" width={300} fontWeight="bold" color="white" fontSize={16} action={getPemission} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
