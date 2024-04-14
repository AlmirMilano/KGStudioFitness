import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { 
    Home,
    Welcome,     
    SignIn
} from "../pages";
import HomeNavigationTabs from "./BottomTabs";

const Stack = createNativeStackNavigator();

export default props =>(
    <Stack.Navigator 
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="Home" component={HomeNavigationTabs}/>
    </Stack.Navigator>
)

export function HomeNavigation(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    )
}