import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const ListItem = (props) => {
    return (
        <View style={styles.listItem}>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate({
                        routeName: props.nextRoute,
                        params: {
                            categoryId: props.itemData.item.id
                        }
                    }
                    )
                }}
            >
                <Text>{props.itemData.item.title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ListItem;

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});
