import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';
import Color from '../constants/Color';

import { Ionicons } from '@expo/vector-icons';


// ============================================================================================
// Screen based Navigator
// ============================================================================================
const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
},
    {
        defaultNavigationOptions: {
            headerTitle: "The Meals",
            headerStyle: {
                backgroundColor: (Platform.OS === 'android') ? Color.header : 'white'
            },
            headerTintColor: (Platform.OS === 'ios') ? Color.header : 'white',
        }
    }
);

const FavouriteNavigator = createStackNavigator({
    Favourite: FavouritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerTitle: "Favourite Meals",
        headerStyle: {
            backgroundColor: (Platform.OS === 'android') ? Color.header : 'white'
        },
        headerTintColor: (Platform.OS === 'ios') ? Color.header : 'white'
    }
})

const FilterNavigator = createStackNavigator({
    Filter: FilterScreen
}, {
    defaultNavigationOptions: {
        headerTitle: "Filter Meal",
        headerStyle: {
            backgroundColor: (Platform.OS === 'android') ? Color.header : 'white'
        },
        headerTintColor: (Platform.OS === 'ios') ? Color.header : 'white'
    }
})



// ============================================================================================
// Tab based Navigator
// ============================================================================================
const TabNavigator = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons
                        name='ios-restaurant'
                        size={25}
                        color={tabInfo.tintColor}
                    />
                );
            }
        }
    },
    Favourites: {
        screen: FavouriteNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons
                        name='ios-star'
                        size={25}
                        color={tabInfo.tintColor}
                    />
                );
            }
        }
    },
}


// The main Tab navigation lies here
const MealsFavTabNavigator =
    Platform.OS === 'android' ?
        //createMaterialBottomTabNavigator(TabNavigator, {activeTintColor: Color.header, shifting: true})
        createBottomTabNavigator(TabNavigator)
        :
        createBottomTabNavigator(TabNavigator, {
            tabBarOptions: {
                activeTintColor: Color.header
            }
        });


// ============================================================================================
// Drawer based navigator
// ============================================================================================
const MainNavigation = createDrawerNavigator({
    Meals: { screen: MealsFavTabNavigator, navigationOptions: { drawerLabel: 'The Meals' } },
    Filters: { screen: FilterNavigator, navigationOptions: { drawerLabel: 'Filter Meal' } }
}, {
    contentOptions: {
        activeTintColor: Color.secondary, // set the color of selection at the drawer to orange
        labelStyle: {
            fontFamily: 'open-sans'
        }
    }
});

export default createAppContainer(MainNavigation);