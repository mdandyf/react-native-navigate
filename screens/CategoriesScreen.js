import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = (props) => {
    
    const renderItemDetail = (itemData) => {
        return (
            <View style={styles.listItem}>
                <TouchableOpacity 
                    onPress={() => {props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }}
                    )
                }}>
                    <Text>{itemData.item.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <FlatList
            numColumns={2}
            keyExtractor={(itemData, index) => itemData.id}
            data={CATEGORIES}
            renderItem={renderItemDetail}
        />
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});
