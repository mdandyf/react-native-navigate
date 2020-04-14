import React, { useEffect, useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import * as categoriesAction from '../store/actions/categories-action';

import Color from '../constants/Color';
import HeaderButton from '../components/HeaderButton';
import CategoryListItem from '../components/CategoryListItem';
import LoadingIndicator from '../components/others/LoadingIndicator';

const CategoriesScreen = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState();

    // Getting data of categories from Firebase real-time database
    const dispatch = useDispatch();

    const loadCategories = useCallback(async () => {
        setIsError(null);
        try {
            setIsLoading(true);
            await dispatch(categoriesAction.getCategories());
        } catch (err) {
            setIsError(err);
        }
        setIsLoading(false);
    }, [setIsLoading, setIsError, dispatch]);


    // Whenever the screen at first loaded, then the loadCategories will be executed
    useEffect(() => {
        loadCategories();
    }, [dispatch, loadCategories]);

    // Whenever the screen move to other screen, then back to categories page, the loadCategories will be executed again
    useEffect(() => {
        const willFocusProps = props.navigation.addListener('willFocus', loadCategories);

        return() => {
            willFocusProps.remove();
        }
    }, [loadCategories]);

    // get data categories back from API
    const categories = useSelector(state => state.categoriesReducerState.categories);

    // Rendering back the needed data
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
                { text: 'Try Again', onPress: loadCategories }
            ]
        );
    }

    return (
        <FlatList
            numColumns={2}
            keyExtractor={(itemData, index) => itemData.id}
            data={categories}
            renderItem={(itemData) =>
                <CategoryListItem
                    itemData={itemData.item}
                    onSelect={() => {
                        props.navigation.navigate({
                            routeName: 'CategoryMeals',
                            params: {
                                category: itemData.item
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