import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import OrdersScreen from './Screens/OrdersScreen';
import OrderDetail from './Screens/OrderDetailScreen';
import ProductsScreen from './Screens/ProductsScreen';
import TakePhoto from './Screens/TakePhotoScreen';
import { log } from '../Recursive/Log'
import Comments from './Screens/CommentsScreen';

const Stack = createStackNavigator();
export default function OrdersStack() {
    return (
        // <NavigationContainer>
        <Stack.Navigator
        //  headerMode="none"
        >
            <Stack.Screen name="Orders" component={OrdersScreen} />
            <Stack.Screen name="OrderDetail" component={OrderDetail} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="TakePhoto" component={TakePhoto} />
            <Stack.Screen name="Comments" component={Comments} />
        </Stack.Navigator>
        // </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
