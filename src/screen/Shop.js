import * as React from 'react';
import { View, Text, Button, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderShop from '../component/HeaderShop';
import SearchBarShop from '../component/SearchBarShop';
import NavbarItem from '../component/NavbarItem';
import ContentShop from '../component/ContentShop';

function ShopScreen({ navigation }) {
    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <ScrollView showVerticalIndicator={false}>
                <HeaderShop />
                <SearchBarShop />
                <NavbarItem />
                <ContentShop />
                <ContentShop />
                <ContentShop />
            </ScrollView>
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
})

export default ShopScreen;