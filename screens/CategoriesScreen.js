import React from 'react';
import { FlatList } from 'react-native';

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