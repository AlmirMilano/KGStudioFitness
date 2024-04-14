import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    StatusBar,
    SafeAreaView,
    Platform,
    ImageBackground
} from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

export default function Home() {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../images/fundo.jpeg')}
                style={{ width: '100%', height: '100%' }}>
                <View style={styles.treino}>
                    <View >
                        <Text>A</Text>
                    </View>
                    <View>
                        <Text>B</Text>
                    </View>
                    <View>
                        <Text>C</Text>
                    </View>
                    <View>
                        <Text>D</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.content}>
                        <Text style={styles.text}>Supino Reto</Text>
                        <Text style={styles.text}>Carga: 15/15</Text>
                        <Text style={styles.text}>Repetições: 5</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text}>Supino Reto</Text>
                        <Text style={styles.text}>Carga: 15/15</Text>
                        <Text style={styles.text}>Repetições: 5</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text}>Supino Reto</Text>
                        <Text style={styles.text}>Carga: 15/15</Text>
                        <Text style={styles.text}>Repetições: 5</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text}>Supino Reto</Text>
                        <Text style={styles.text}>Carga: 15/15</Text>
                        <Text style={styles.text}>Repetições: 5</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text}>Supino Reto</Text>
                        <Text style={styles.text}>Carga: 15/15</Text>
                        <Text style={styles.text}>Repetições: 5</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text}>Supino Reto</Text>
                        <Text style={styles.text}>Carga: 15/15</Text>
                        <Text style={styles.text}>Repetições: 5</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text}>Supino Reto</Text>
                        <Text style={styles.text}>Carga: 15/15</Text>
                        <Text style={styles.text}>Repetições: 5</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text}>Supino Reto</Text>
                        <Text style={styles.text}>Carga: 15/15</Text>
                        <Text style={styles.text}>Repetições: 5</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text}>Supino Reto</Text>
                        <Text style={styles.text}>Carga: 15/15</Text>
                        <Text style={styles.text}>Repetições: 5</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text}>Supino Reto</Text>
                        <Text style={styles.text}>Carga: 15/15</Text>
                        <Text style={styles.text}>Repetições: 5</Text>
                    </View>

                </ScrollView>
            </ImageBackground>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFF00',
    },
    content: {
        alignSelf: 'center',
        flex: 1,
        width: '95%',
        height: 120,
        marginBottom: 20,
        backgroundColor: '#000',
        alignItems: 'left',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    text: {
        margin: 7,
        color: "#fff"
    },
    treino: {
        width: 10,
        height: 10,
        alignContent: 'left',
        color: "red"
    }
});