import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons"
import { HomeNavigation } from "./StackNavigation";
import Profile from "../pages/Profile";

const Tab = createBottomTabNavigator();

export default function HomeNavigationTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#9FE801',
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#171626',
                    borderTopWidth: 0,

                    bottom: 14,
                    left: 14,
                    right: 14,
                    elevation: 0,
                    borderRadius: 14,
                    height: 60
                }
            }}>
            <Tab.Screen
                name='HomeTab'
                component={HomeNavigation}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    tabBarLabel: "Início"
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
                    tabBarLabel: "Perfil"
                }}
            />
        </Tab.Navigator>
    )
}

{/** 41:20 minutos de vídeo */}