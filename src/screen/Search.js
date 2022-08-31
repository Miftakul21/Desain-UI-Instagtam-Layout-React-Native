import * as React from 'react';
import { View, Text, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import SearchBar from '../component/Searchbar';
import ContentSearch from '../component/ContentSearch';

function SearchScreen({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <SearchBar />
                <ContentSearch />
                <ContentSearch />
                <ContentSearch />
            </ScrollView>
        </SafeAreaView >
    );
}

export default SearchScreen;

