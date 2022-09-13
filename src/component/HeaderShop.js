import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

function HeaderShop() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shop</Text>
            <View style={styles.container_item}>
                <Icon name="calendar" size={20} color="#000" />
                <Icon name="bars" size={20} color="#000" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 14,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    container_item: {
        width: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

});

export default HeaderShop;