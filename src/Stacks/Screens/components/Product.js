import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Product() {
    return (
        <View style={{flexDirection: "row", alignSelf: "center", backgroundColor:"white", width:380, borderRadius:15, marginHorizontal:10, marginVertical:5}}>
            <View style={{margin: 10, padding:5}}>
                <Image  source={require('../../../../assets/img/product.png')}/>
            </View>
            <View style={{margin: 10}}>
                <Text style={styles.textProduct}>Pedigree Vital Protect Adulto E4 Senior</Text>
                <Text style={styles.textProduct}>Sku: 5567867</Text>
                <Text style={styles.textProduct}>Referencia: 8 kg</Text>
                <Text style={styles.textProduct}>Cantidad: 8</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    textProduct: {
        color: "#614186"
    }
})
