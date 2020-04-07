import React from 'react';
import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import ListItem from '../components/ListItem';

const CategoriesScreen = (props) => {
    return (
        <FlatList
            numColumns={2}
            keyExtractor={(itemData, index) => itemData.id}
            data={CATEGORIES}
            renderItem={(itemData) =>
                <ListItem
                    itemData={itemData}
                    navigation={props.navigation}
                    nextRoute='CategoryMeals'
                />
            }
        />
    );
};

export default CategoriesScreen;