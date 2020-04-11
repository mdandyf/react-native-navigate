import React from 'react';
import { Text, View, ImageBackground, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummy-data';
import { MEALS } from '../data/dummy-data';

import Color from '../constants/Color';
import HeaderButton from '../components/HeaderButton';
import CategoryMealListItem from '../components/CategoryMealListItem';
import MealDetailListItem from '../components/MealDetailListItem';

const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id == mealId);

    const categoryId = props.navigation.getParam('categoryId');
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
                    <MealDetailListItem key={detail} keyProps={detail} style={styles.listContainer} data={detail} />
                )}
                <Text style={styles.title}>Steps</Text>
                {selectedMeal.steps.map((detail) =>
                    <MealDetailListItem key={detail} keyProps={detail} style={styles.listContainer} data={detail} />
                )}
            </View>
        </ScrollView>

    );
};

export default MealDetailScreen;

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id == mealId);

    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find((data) => data.id === categoryId);

    let selectedColor;
    if ((selectedCategory === undefined) || (selectedCategory === '')) {
        selectedColor = Color.header;
    } else {
        selectedColor = selectedCategory.color;
    }

    return {
        headerTitle: selectedMeal.title,
        headerTitleStyle: {
            fontSize: 16
        },
        headerStyle: {
            backgroundColor: (Platform.OS === 'android') ? selectedColor : Color.white,
        },
        headerTintColor: (Platform.OS === 'ios') ? selectedColor : Color.white,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favourite' iconName='ios-star' onPress={() => { console.log('Mark as Favourite!') }} />
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
    listContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal: 20,
        borderWidth: 0.5,
        borderRadius: 3,
        width: Dimensions.get('window').width - 40,
        height: 45,
    }
});
