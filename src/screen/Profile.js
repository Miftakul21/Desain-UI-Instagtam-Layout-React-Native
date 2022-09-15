import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon2 from 'react-native-vector-icons/dist/FontAwesome5';
import HeaderProfile from '../component/HeaderProfile';
import UserComponent from '../component/UserComponent';

function ProfileScreen({ navigation }) {
    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <HeaderProfile />
            <UserComponent />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
});

export default ProfileScreen;