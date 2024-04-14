import React from "react";
import {
    Input,
    NativeBaseProvider,
    KeyboardAvoidingView
} from "native-base";
import {
    View,
    ImageBackground,
    Platform,
    TouchableOpacity,
    StyleSheet,
    Text
} from "react-native";

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {

    const navigation = useNavigation();

    return (
        <View>
            <ImageBackground
                source={require('../../images/fundo.jpeg')}
                style={{ width: '100%', height: '100%' }}>
                <NativeBaseProvider>
                    <KeyboardAvoidingView
                        behavior={Platform.OS == 'ios' ? 'padding' : 'position'}
                        keyboardVerticalOffset={20}>
                        <Animatable.View
                            alignItems='center'
                            flexDirection='column'
                            animation='fadeInUp'
                            delay={500}>
                            <Input marginTop="80%" variant='rounded' placeholder="Login" w="70%"
                                borderColor="#fcff00" />
                            <Input type="password" marginTop="5" variant='rounded' placeholder="Senha" w="70%"
                                borderColor="#fcff00" />
                            <View>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => navigation.navigate('Home')}
                                >
                                    <Text style={styles.buttonText}>Acessar</Text>
                                </TouchableOpacity>
                            </View>
                        </Animatable.View>
                    </KeyboardAvoidingView>
                </NativeBaseProvider>

            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        backgroundColor: '#FCFF00',
        borderRadius: 50,
        paddingVertical: 8,
        width: '40%',
        alignSelf: 'center',
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})