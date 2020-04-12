import React from 'react';
import { FlatList } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

import { CATEGORIES } from '../data/dummy-data';
import CategoryListItem from '../components/CategoryListItem';

const CategoriesScreen = (props) => {
    return (
        <FlatList
            numColumns={2}
            keyExtractor={(itemData, index) => itemData.id}
            data={CATEGORIES}
            renderItem={(itemData) =>
                <CategoryListItem
                    itemData={itemData.item}
                    onSelect={() => {
                        props.navigation.navigate({
                            routeName: 'CategoryMeals',
                            params: {
                                categoryId: itemData.item.id
                            }
                        }
                        )
                    }}
                />
            }
        />
    );
};

export default CategoriesScreen;

CategoriesScreen.navigationOptions = (navigationData) => {
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