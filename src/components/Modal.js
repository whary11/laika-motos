import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements';

export default function Modal(props) {
    const {visible, setVisible, children, fullScreen, overlayStyle} = props;
    
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View>
            <Overlay overlayStyle={overlayStyle} isVisible={visible} onBackdropPress={toggleOverlay} fullScreen={fullScreen ? fullScreen : false}>
                {children?children:<Text>Nada en el modal</Text>}
            </Overlay>
        </View>
    );
}

const styles = StyleSheet.create({})
