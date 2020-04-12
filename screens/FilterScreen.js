import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import SwitchItem from '../components/SwitchItem';

const FilterScreen = (props) => {
    const [isGLutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilters = () => {
      const appliedFilters = {
          glutenFree: isGLutenFree,
          lactoseFree: isLactoseFree,
          vegan: isVegan,
          vegetarian: isVegetarian
      }

      console.log(appliedFilters);
    }

    useState = {

    }

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
                    onPress={() => { navigationData.navigation.toggleDrawer() }}
                />
            </HeaderButtons>,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Save'
                    iconName='ios-save'
                    onPress={() => console.log('Save Button is pressed!!!')}
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