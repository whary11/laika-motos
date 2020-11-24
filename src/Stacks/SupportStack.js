const { RefreshControlBase } = require("react-native");

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Support from './Screens/SupportScreen';
const Stack = createStackNavigator();
export default function SupportStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Support" component={Support} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
