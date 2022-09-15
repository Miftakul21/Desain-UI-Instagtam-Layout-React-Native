import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';

function Header() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/img/text-instagram.png')} style={styles.logo_img}></Image>
            <View style={styles.container_item}>
                <Icon name="plus-square" size={25} color="black" />
                <Icon name="heart" size={25} color="black" />
                <Icon2 name="chatbubble-outline" size={25} color="black" />
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
    logo_img: {
        width: 100,
        height: 30,
    },
    container_item: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});

export default Header;