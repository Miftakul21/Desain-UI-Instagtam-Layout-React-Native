import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/Home';
import SearchScreen from '../screen/Search';
import VideoScreen from '../screen/Video';
import ShopScreen from '../screen/Shop';
import ProfileScreen from '../screen/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
    return (
        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        //         <Stack.Screen name="Search" component={SearchScreen} />
        //         <Stack.Screen name="Search" component={SearchScreen} />
        //         <Stack.Screen name="Profile" component={ProfileScreen} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Video" component={VideoScreen} />
                <Tab.Screen name="Shop" component={ShopScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;