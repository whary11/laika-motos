import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BottomSheet, ListItem } from 'react-native-elements'
import {log} from '../../../Recursive/Log'


export default function SelectTimeZone2(props) {
    const {visible, setVisible, setFilter} = props;
    const list = [
        { id: 1,name: 'DE 9 AM A 11 AM' },
        { id: 3, name: 'DE 2 PM A 5 PM'},
        { id: 4, name: 'DE 6 PM A 9:30 PM'},
        {
            name: 'Cerrar',
            containerStyle: { backgroundColor: '#E3626E' },
            titleStyle: { color: 'white' },
            cancel:true
        },
    ];

    const onClickButtom = (l) => {
        setVisible(false)
        setFilter(l.id ? l:{})
    }

    


    return (
        <View>
            <BottomSheet isVisible={visible}>
                {list.map((l, i) => (
                    <ListItem key={i} containerStyle={l.containerStyle} onPress={() => onClickButtom(l)}>
                    <ListItem.Content>
                        <ListItem.Title style={l.titleStyle, {alignSelf:"center"}}>{l.name}</ListItem.Title>
                    </ListItem.Content>
                    </ListItem>
                ))}
            </BottomSheet>

        </View>
    )
}

const styles = StyleSheet.create({})
