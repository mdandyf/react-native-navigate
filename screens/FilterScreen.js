import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

const FilterScreen = (props) => (
    <View>
        <Text>This is FilterScreen</Text>
    </View>
);

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
            </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    
});