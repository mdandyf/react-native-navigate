import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';

import CategoryMealListItem from '../components/CategoryMealListItem';
import DataNotFoundItem from '../components/others/DataNotFoundItem';

const CategoryMealsScreen = (props) => {
    const categoryId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.mealsReducerState.filteredMeals);

    const selectedMeal = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    return (
        (selectedMeal.length <= 0)
        ?
        <DataNotFoundItem />
        :
        <CategoryMealListItem
            nextRoute='MealDetail'
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
