import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

function Header() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/img/text-instagram.png')} style={styles.logo_img}></Image>
            <View style={styles.container_item}>
                <Image source={require('../../assets/img/plus-icon.png')} style={styles.img_pinggir} />
                <Image source={require('../../assets/img/heart-icon.png')} style={styles.img_tengah} />
                <Image source={require('../../assets/img/send-icon.png')} style={styles.img_pinggir} />
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    img_pinggir: {
        width: 25,
        height: 25,
        marginHorizontal: 5
    },
    img_tengah: {
        width: 30,
        height: 30,
        marginHorizontal: 5
    }

});

export default Header;