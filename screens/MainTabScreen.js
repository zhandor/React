import React from "react"

import HomeScreen from "./HomeScreen"
import AlarmScreen from "./AlarmScreen"
import ProfileScreen from "./ProfileScreen"

import { createStackNavigator } from "@react-navigation/stack"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import MapScreen from "./MapScreen"

const Tab = createMaterialBottomTabNavigator();

const ProfileStack = createStackNavigator()

const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: "#0583F2",
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
            fontWeight: "bold"
        }
    }}>
        <ProfileStack.Screen name="Home" component={ProfileScreen} options={{
            title: "Bem-vindo, Saulo",
            headerLeft: () => (
                <Icons.Button name="menu" size={25} backgroundColor="#0583F2" onPress={() => navigation.openDrawer()}/>
            )
        }}/>
    </ProfileStack.Navigator>
)

const MainTabScreen = () => {
    return(
        <Tab.Navigator
            initialRouteName="HomeScreen"
            tabBarOptions={{
            activeTintColor: '#e91e63',
        }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Icons name="home" color={color} size={26} />
                ),
            }}/>
            <Tab.Screen
                name="Alarme"
                component={AlarmScreen}
                options={{
                tabBarLabel: 'Alarme',
                tabBarIcon: ({ color, size }) => (
                    <Icons name="bell" color={color} size={26} />
                ),
            }}/>
            <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                tabBarLabel: 'Mapa',
                tabBarIcon: ({ color, size }) => (
                    <Icons name="map" color={color} size={26} />
                ),
            }}/>
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                tabBarLabel: 'Perfil',
                tabBarIcon: ({ color, size }) => (
                    <Icons name="account" color={color} size={26} />
                ),
            }}/>
        </Tab.Navigator>
    ) 
}

export default MainTabScreen