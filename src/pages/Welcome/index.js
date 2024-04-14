import React from 'react';
import {
    View,
    ImageBackground,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,

} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native'

export default function Welcome() {

    const navigation = useNavigation();

    return (
        <View style={styles.conteiner}>
            <ImageBackground
                source={require('../../images/fundo.jpeg')}
                style={{ width: '100%', height: '100%' }}
            >
                <View style={styles.containerLogo}>
                    
                </View>
                <Animatable.View animation="fadeInUp" delay={800} style={styles.conteinerForm}>
                    <Text style={styles.title}>
                        Monitore seu treino, dieta e suplementação de qualquer lugar!
                    </Text>
                    <Text style={styles.text}>Faça o login para começar</Text>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => navigation.navigate('SignIn')}    
                    >
                        <Text style={styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1
    },
    containerLogo: {
        flex: 2
    },
    conteinerForm: {
        flex: 1,
        
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        color: '#FCFF00'
    },
    text: {
        color: '#A6B000'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#FCFF00',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});