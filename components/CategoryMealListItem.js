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
                            ((props.nextRoute != '') || (props.nextRoute != undefined)) 
                            ?
                            props.navigation.navigate({
                                routeName: props.nextRoute,
                                params: {
                                    mealId: itemData.item.id,
                                    category: props.category
                                }
                            })
                            :
                            {}
                        }}
                    />
                }
            />
        </View>
    );
};

export default CategoryMealListItem;
