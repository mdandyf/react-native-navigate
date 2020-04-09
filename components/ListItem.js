import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const ListItem = (props) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                props.navigation.navigate({
                    routeName: props.nextRoute,
                    params: {
                        categoryId: props.itemData.id
                    }
                }
                )
            }}
        >
            <View style={{ ...styles.listItem, ...{ backgroundColor: props.itemData.color } }}>
                <Text style={styles.text}>
                    {props.itemData.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listItem: {
        borderWidth: 1,
        borderRadius: 10,
        margin: 15,
        height: 150,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'open-sans',
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    }
});
