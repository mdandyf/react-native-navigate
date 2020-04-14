import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Color from '../constants/Color';

const DataNotFoundItem = (props) => (
    <View style={styles.container}>
        <Text style={styles.textItem}>{'Data not found...'}</Text>
    </View>
);

export default DataNotFoundItem;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textItem: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'red'
    }
});