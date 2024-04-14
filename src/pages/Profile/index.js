import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    StatusBar,
    SafeAreaView,
    Platform,
    Image,
    ImageBackground
} from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

export default function Home() {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../images/fundo.jpeg')}
                style={{ width: '100%', height: '100%' }}>
                <View style={styles.content}>
                    <Image source={require('../../images/foto-perfil.jpg')} style={styles.image} />
                    <Text style={styles.text}>Thiago Guerreiro Garcia</Text>
                    <Text style={styles.text}>Personal Trainer</Text>
                    <Text style={styles.text}>CREF: 123456</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    content: {
        alignSelf: 'center',
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    text: {
        marginTop: 10,
        marginBottom: 3,
        fontWeight: 'bold',
        color: '#fff'
    },
    image: {
        borderRadius: 100,
        marginTop: 30,
        width: 150,
        height: 150
    }
});