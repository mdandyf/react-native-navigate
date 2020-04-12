import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

const MealListItem = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onSelect}>
                <View style={styles.imageContainer}>
                    <ImageBackground
                        fadeDuration={1000}
                        style={styles.image}
                        source={{ uri: props.itemData.imageUrl }}>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>
                                {props.itemData.title}
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailText}>{props.itemData.duration}m</Text>
                    <Text style={styles.detailText}>{props.itemData.afforablility}</Text>
                    <Text style={styles.detailText}>{props.itemData.complexity}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default MealListItem;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginLeft: 10,
        marginRight: 10
    },
    imageContainer: {
        flex: 1,
        flexDirection: "column",
        borderWidth: 1,
        height: 200,
        width: Dimensions.get('window').width - 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'stretch',
        overflow: 'hidden'
    },
    image: {
        flex: 1,
        resizeMode: 'center',
        justifyContent: "flex-end",
    },
    textContainer: {
        alignItems: 'center',
        backgroundColor: 'black',
        opacity: 0.7
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: 'white'
    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailText: {
        fontFamily: 'open-sans',
        fontSize: 15
    }
});
