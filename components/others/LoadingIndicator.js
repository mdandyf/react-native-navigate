import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingIndicator = (props) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={props.size} color={props.color} />
        </View>
    );
}

export default LoadingIndicator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
