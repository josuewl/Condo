import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ApartamentosCadastrados = () => {
    return (
        <View>
            <Button
                style={styles.button}
                mode="contained"
                onPress={() => console.log('Pressed')}>
                <Text style={styles.buttonText}>Bloco 001</Text>
            </Button>

            <Button
                style={styles.button}
                mode="contained"
                onPress={() => console.log('Pressed')}>
                <Text style={styles.buttonText}>Bloco 002</Text>
            </Button>

            <Button
                style={styles.button}
                mode="contained"
                onPress={() => console.log('Pressed')}>
                <Text style={styles.buttonText}>Bloco 003</Text>
            </Button>

            <Image
                style={styles.imageLogo}
                source={require('../../assets/LogoCondo2.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageLogo: {
        position: 'absolute',
        bottom: -290,
        left: -10,
        width: 180,
        height: 230,
        resizeMode: 'stretch',
        opacity: 0.5,
        marginLeft: 110,
    },

    button: {
        marginTop: 20,
        backgroundColor: 'rgba(6, 182, 221, 0.7)', //Cor #06b6DD com 70% de transparência
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '80%',
        marginLeft: 40,
        marginVertical: -10,
    },

    buttonText: {
        color: '242220',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default ApartamentosCadastrados;