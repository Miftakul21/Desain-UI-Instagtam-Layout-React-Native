import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
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
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Home") {
                            iconName = focused ? 'home' : 'home';
                            return <Icon name={iconName} size={size} color={color} />
                        } else if (route.name === "Search") {
                            iconName = focused ? 'search' : 'search';
                            return <Icon name={iconName} size={size} color={color} />
                        } else if (route.name === "Video") {
                            iconName = focused ? 'video' : 'video';
                            return <Icon name={iconName} size={size} color={color} />
                        } else if (route.name === "Shop") {
                            iconName = focused ? 'shopping-bag' : 'shopping-bag';
                            return <Icon name={iconName} size={size} color={color} />
                        } else if (route.name === "Profile") {
                            return <Image source={{ uri: 'https://picsum.photos/200/300?random=1' }} style={{ borderRadius: 50, width: 35, height: 35, marginHorizontal: 5 }} />
                        }
                    },
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                })}>
                <Tab.Screen
                    options={{ headerShown: false, tabBarShowLabel: false }}
                    name="Profile"
                    component={ProfileScreen}
                />
                <Tab.Screen
                    options={{ headerShown: false, tabBarShowLabel: false }}
                    name="Home"
                    component={HomeScreen}
                />
                <Tab.Screen
                    options={{ headerShown: false, tabBarShowLabel: false }}
                    name="Search"
                    component={SearchScreen}
                />
                <Tab.Screen
                    options={{ headerShown: false, tabBarShowLabel: false }}
                    name="Video"
                    component={VideoScreen}
                />
                <Tab.Screen
                    options={{ headerShown: false, tabBarShowLabel: false }}
                    name="Shop"
                    component={ShopScreen}
                />
            </Tab.Navigator>
        </NavigationContainer >
    );
}

export default Navigation;