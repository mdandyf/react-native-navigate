import React from 'react';
import { StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import { MEALS } from '../data/dummy-data';
import CategoryMealListItem from '../components/CategoryMealListItem';

const CategoryMealsScreen = (props) => {
    const categoryId = props.navigation.getParam('categoryId');

    const selectedMeal = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    return (
        <CategoryMealListItem
            style={styles.container}
            categoryId={categoryId}
            selectedMeal={selectedMeal}
            navigation={props.navigation}
        />
    );
};

// Changing some details of header and content based on the data sent from navigation
CategoryMealsScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const category = CATEGORIES.find((data) => data.id === categoryId);

    return {
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
