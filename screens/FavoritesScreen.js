import React from 'react';
import { StyleSheet } from 'react-native';
import CategoryMealListItem from '../components/CategoryMealListItem';

import { MEALS } from '../data/dummy-data';

const FavouritesScreen = (props) => {

    const categoryId = '';

    const favouriteMeals = ['m1', 'm2', 'm3'];

    const selectedMeal = MEALS.filter(meal => favouriteMeals.indexOf(meal.id) > 0);

    return(
         <CategoryMealListItem
            style={styles.container}
            categoryId={categoryId}
            selectedMeal={selectedMeal}
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