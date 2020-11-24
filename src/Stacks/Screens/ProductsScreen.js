import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native'
import Product from './components/Product'

export default function ProductsScreen() {
    const [products, setProducts] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}])
    return (
        <SafeAreaView>
            <ScrollView >
                {products.map((product, i) => <Product  key={i} product={product}/>)}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
