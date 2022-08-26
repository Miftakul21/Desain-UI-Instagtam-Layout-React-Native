import React from "react";
import { Text, View, Image } from "react-native";

function Header() {
    return (
        <View style={{ padding: 14, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image source={require('../../assets/img/text-instagram.png')} style={{ width: 100, height: 30 }}></Image>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image source={require('../../assets/img/plus-icon.png')} style={{ width: 25, height: 25, marginHorizontal: 5 }} />
                <Image source={require('../../assets/img/heart-icon.png')} style={{ width: 30, height: 30, marginHorizontal: 5 }} />
                <Image source={require('../../assets/img/send-icon.png')} style={{ width: 25, height: 25, marginHorizontal: 5 }} />
            </View>
        </View>
    );
}

export default Header;