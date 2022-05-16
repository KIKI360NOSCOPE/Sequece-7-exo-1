import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';

/* importer les icon selon la platform */
const homeIcon = Platform.OS === 'ios' ? <Icon name="ios-home" size={30} color="gray" /> : <Icon name="md-home" size={30} color="black" />;
const profileIcon = Platform.OS === 'ios' ? <Icon name="ios-person" size={30} color="gray" /> : <Icon name="md-person" size={30} color="black" />;

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: () => homeIcon
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: () => profileIcon
            }} />
        </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigation;