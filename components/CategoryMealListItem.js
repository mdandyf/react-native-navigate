import React from 'react';
import { View, FlatList } from 'react-native';

import MealListItem from './MealListItem';

const CategoryMealListItem = (props) => {
    return (
        <View style={props.style}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={props.selectedMeal}
                renderItem={(itemData) =>
                    <MealListItem
                        itemData={itemData.item}
                        onSelect={() => {
                            props.navigation.navigate({
                                routeName: 'MealDetail',
                                params: {
                                    mealId: itemData.item.id,
                                    categoryId: props.categoryId
                                }
                            })
                        }}
                    />
                }
            />
        </View>
    );
};

export default CategoryMealListItem;
