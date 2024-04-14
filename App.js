import React from 'react';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View } from 'react-native';

export default props =>
    <View style={{flex: 1}}>
        <StatusBar
            backgroundColor="#FCFF00"
            barStyle="dark-content" />
        <Routes />
    </View>


