import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as mealsAction from '../store/actions/meals-action';

import Color from '../constants/Color';

import CategoryMealListItem from '../components/CategoryMealListItem';
import DataNotFoundItem from '../components/others/DataNotFoundItem';
import LoadingIndicator from '../components/others/LoadingIndicator';

const CategoryMealsScreen = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState();

    // Getting data of categories from Firebase real-time database
    const dispatch = useDispatch();
    const isFiltered = useSelector(state => state.mealsReducerState.isFiltered);

    const loadMeals = useCallback(async () => {
        setIsError(null);
        try {
            setIsLoading(true);
            await dispatch(mealsAction.getMeals());
        } catch (err) {
            setIsError(err);
        }
        setIsLoading(false);
    }, [setIsLoading, setIsError, dispatch]);


    // Whenever the screen at first loaded and filter does not applied, then the loadMeals will be executed
    useEffect(() => {
        if(!isFiltered) {
            loadMeals();
        }
    }, [dispatch, loadMeals, isFiltered]);

    const category = props.navigation.getParam('category');
    const availableMeals = useSelector(state => state.mealsReducerState.filteredMeals);
    const selectedMeal = availableMeals.filter(meal => meal.categoryIds.indexOf(category.id) >= 0);

    if (isLoading) {
        return (
           <LoadingIndicator size={'large'} color={Color.header} />
        );
    }

    if (!isLoading && isError) {
        Alert.alert(
            'Error',
            'Something went wrong!',
            [
                { text: 'Try Again', onPress: loadMeals }
            ]
        );
    }

    return (
        (selectedMeal.length <= 0)
            ?
            <DataNotFoundItem />
            :
            <CategoryMealListItem
                nextRoute='MealDetail'
                style={styles.container}
                category={category}
                selectedMeal={selectedMeal}
                navigation={props.navigation}
            />
    );
};

// Changing some details of header and content based on the data sent from navigation
CategoryMealsScreen.navigationOptions = (navigationData) => {
    const category = navigationData.navigation.getParam('category');
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
