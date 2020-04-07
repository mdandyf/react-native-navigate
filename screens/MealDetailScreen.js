import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const MealDetailScreen = (props) => {
    console.log(props);
    return (
        <View style={styles.container}>
            <Text>This is MealDetailScreen</Text>
            <Button
                title="Back to Categories"
                onPress={() => {
                    props.navigation.popToTop();
                }}
            />
        </View>
    );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
