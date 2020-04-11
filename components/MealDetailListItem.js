import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const MealDetailListItem = (props) => {
    return (
        <View key={props.keyProps} style={props.style}>
            <Text style={styles.item}>{props.data}</Text>
        </View>
    );
};

export default MealDetailListItem;

const styles = StyleSheet.create({
    item: {
        fontFamily: 'open-sans',
        fontSize: 15,
        marginHorizontal: 5
    }
});
