import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

import MealListItem from '../components/MealListItem';

import { CATEGORIES } from '../data/dummy-data';
import { MEALS } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
    const categoryId = props.navigation.getParam('categoryId');

    const category = CATEGORIES.find((data) => data.id === categoryId);
    const meal = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={meal}
                renderItem={(itemData) => <MealListItem itemData={itemData.item} category={category}/> }
            />
        </View>
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
