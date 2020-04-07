import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>This is CategoryMeal</Text>
            <Button
                title="To Meal Detail"
                onPress={() => {
                    props.navigation.navigate('MealDetail');
                }}
            />
        </View>
    );
};

// Changing some details of header and content based on the data sent from navigation
CategoryMealsScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const category = CATEGORIES.find((data) => data.id === categoryId);

    return{
        headerTitle: category.title,
        headerStyle: {
            backgroundColor: (Platform.OS === 'android') ? category.color : 'white'
        },
        headerTintColor: (Platform.OS === 'ios') ? category.color : 'white'
    };
}

export default CategoryMealsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
