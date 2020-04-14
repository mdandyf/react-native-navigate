import React, { useEffect, useCallback } from 'react';
import { Text, View, ImageBackground, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';

import { toggleFavourite } from '../store/actions/meals-action';

import Color from '../constants/Color';
import HeaderButton from '../components/HeaderButton';
import MealDetailListItem from '../components/MealDetailListItem';

const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');
    const availableMeal = useSelector(state => state.mealsReducerState.meals);
    const selectedMeal = availableMeal.find(meal => meal.id == mealId);

    // Dispatching trigger that the toggle of favourite has been pressed
    const dispatch = useDispatch();
    const toggleFavouriteHandler = useCallback(() => {
        dispatch(toggleFavourite(mealId))
    }, [dispatch, mealId]);

    useEffect(() => {
        // Sending data of the meal title to the header inside NavigationOptions on below code
        props.navigation.setParams({ mealTitle: selectedMeal.title });

        // Sending updated toggle of the meal as being favourited into the NavigationOptions on below code
        props.navigation.setParams({ toggleFav: toggleFavouriteHandler });


    }, [selectedMeal, toggleFavouriteHandler]);

     // Finding if the current meal has been set as favourite meal. Hence, the favourite button color will change
    const isFavouriteMeal = useSelector(state =>
        state.mealsReducerState.favouriteMeals.some(meal => meal.id === mealId)
    );

    useEffect(() => {
          // Sending updated toggle which stating that the current meal has been set as a favourite meal
          props.navigation.setParams( {isFavMeal: isFavouriteMeal} );
          console.log(isFavouriteMeal);
    }, [isFavouriteMeal]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <ImageBackground
                        fadeDuration={1000}
                        style={styles.image}
                        source={{ uri: selectedMeal.imageUrl }}>
                    </ImageBackground>
                </View>
                <Text style={styles.title}>Ingredients</Text>
                {selectedMeal.ingredients.map((detail) =>
                    <MealDetailListItem key={detail} keyProps={detail} style={styles.listContainerIngredients} data={detail} />
                )}
                <Text style={styles.title}>Steps</Text>
                {selectedMeal.steps.map((detail) =>
                    <MealDetailListItem key={detail} keyProps={detail} style={styles.listContainerSteps} data={detail} />
                )}
            </View>
        </ScrollView>

    );
};

export default MealDetailScreen;

MealDetailScreen.navigationOptions = (navigationData) => {

    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find((data) => data.id === categoryId);

    let selectedColor;
    if ((selectedCategory === undefined) || (selectedCategory === '')) {
        selectedColor = Color.header;
    } else {
        selectedColor = selectedCategory.color;
    }

    return {
        headerTitle: navigationData.navigation.getParam('mealTitle'),
        headerTitleStyle: {
            fontSize: 16
        },
        headerStyle: {
            backgroundColor: (Platform.OS === 'android') ? selectedColor : Color.white,
        },
        headerTintColor: (Platform.OS === 'ios') ? selectedColor : Color.white,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Favourite'
                    iconName={navigationData.navigation.getParam('isFavMeal') ? 'ios-star' : 'ios-star-outline'}
                    onPress={navigationData.navigation.getParam('toggleFav')} />
            </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginVertical: 10
    },
    imageContainer: {
        flex: 1,
        flexDirection: "column",
        borderWidth: 1,
        height: 200,
        width: Dimensions.get('window').width - 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'stretch',
        overflow: 'hidden'
    },
    image: {
        flex: 1,
        resizeMode: 'center',
        justifyContent: "flex-end",
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 25,
        marginVertical: 10
    },
    listContainerIngredients: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal: 20,
        borderWidth: 0.5,
        borderRadius: 3,
        width: Dimensions.get('window').width - 40,
        height: 35,
    },
    listContainerSteps: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginHorizontal: 20,
        borderWidth: 0.5,
        borderRadius: 3,
        width: Dimensions.get('window').width - 40,
        height: 80,
    }
});
