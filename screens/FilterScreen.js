import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import SwitchItem from '../components/SwitchItem';

const FilterScreen = (props) => {   
    const { navigation } = props;

    const [isGLutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilters = useCallback(() => {
        // this is to avoid the saveFilter to be rebuild whenever the FilterScreen is rebuild (saving state although the screen is re-rendered)
        // if and only if the state changed, the value in here will be renewed
        const appliedFilters = {
            glutenFree: isGLutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }

        console.log(appliedFilters);
    }, [isGLutenFree, isLactoseFree, isVegan, isVegetarian]); // all parameters that need to be watched

    useEffect(() => {
        // set the function saveFilters and stored it as pointer of a function to be used after async render screen
        navigation.setParams({save: saveFilters});

    }, [saveFilters]); // set the parameter that will be watched during async of render screen (whenever the values in the pointer are changed)

    const onChangePropsGF = (value) => {
        setIsGlutenFree(value);
    }

    const onChangePropsLF = (value) => {
        setIsLactoseFree(value);
    }

    const onChangePropsVg = (value) => {
        setIsVegan(value);
    }

    const onChangePropsVeg = (value) => {
        setIsVegetarian(value);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <SwitchItem title={'Gluten Free'} isGLutenFree={isGLutenFree} onChange={onChangePropsGF} />
            <SwitchItem title={'Lactose Free'} isGLutenFree={isLactoseFree} onChange={onChangePropsLF} />
            <SwitchItem title={'Vegan'} isGLutenFree={isVegan} onChange={onChangePropsVg} />
            <SwitchItem title={'Vegetarian'} isGLutenFree={isVegetarian} onChange={onChangePropsVeg} />
        </View>
    );
};

export default FilterScreen;

FilterScreen.navigationOptions = (navigationData) => {
    return {
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Menu'
                    iconName='ios-menu'
                    onPress={() => { navigationData.navigation.toggleDrawer() }} // this is executed as a function
                />
            </HeaderButtons>,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Save'
                    iconName='ios-save'
                    onPress={navigationData.navigation.getParam('save')} // this is to retrieve the pointer pointed by keyword save above
                />
            </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 25
    }
});