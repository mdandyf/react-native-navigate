import React from 'react';
import { StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';

import CategoryMealListItem from '../components/CategoryMealListItem';

const FavouritesScreen = (props) => {

    const categoryId = '';

    const availableMeals = useSelector(state => state.mealsReducerState.favouriteMeals);

    return(
         <CategoryMealListItem
            nextRoute='MealDetail'
            style={styles.container}
            categoryId={categoryId}
            selectedMeal={availableMeals}
            navigation={props.navigation}
        />
    );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});