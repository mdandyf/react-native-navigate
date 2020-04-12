import React from 'react';
import { Text, View, Switch, StyleSheet, Platform } from 'react-native';

import Color from '../constants/Color';

const SwitchItem = (props) => {
    return (
        <View style={styles.switchContainer}>
            <Text style={styles.text}>{props.title}</Text>
            <Switch
                trackColor={Color.header}
                thumbColor={(Platform.OS === 'android') ? Color.header : ''}
                value={props.isGLutenFree}
                onValueChange={(prevState) => props.onChange(prevState)}
            />
        </View>
    );
};

export default SwitchItem;

const styles = StyleSheet.create({
    switchContainer: {
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%'
    },
    text: {
        fontFamily: 'open-sans',
        fontSize: 15
    }
});
