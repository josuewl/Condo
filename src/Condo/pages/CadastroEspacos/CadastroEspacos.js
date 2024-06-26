import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'; 
import { Text, TextInput, Button } from 'react-native-paper'; 
import { useNavigation } from '@react-navigation/native'; 
import { Ionicons } from '@expo/vector-icons'; 
import ScreenNavigationCondomino from '../ScreenNavigation/ScreenNavigationCondomino'; 
import { useUser } from '../../context/UserContext'; 
import { cadastrarEspaco } from '../../services/application.Services';


const CadastroEspacos = () => {
    const { user } = useUser();
    const [nomeEspaco, setNomeEspaco] = useState('');
    const [capacidadeMaxima, setCapacidadeMaxima] = useState('');
    const [tempoMaximo, setTempoMaximo] = useState(''); 
    const [textoInstrucoes, setTextoInstrucoes] = useState('');
    const navigation = useNavigation(); 

    console.log('CadastroEspaco user:', user);

    const handleSalvar = async () => {
        if (!user || !user.id) {
            console.error('ID do condomínio não está definido no objeto do usuário');
            Alert.alert('Erro', 'ID do condomínio não está definido no objeto do usuário!');
            return;
        }
        const formData = {
            nomeEspaco,
            capacidadeMaxima,
            tempoMaximo,
            textoInstrucoes,
            condominio_id: user.id,
        };

        try {
            const response = await cadastrarEspaco(formData);
            Alert.alert('Sucesso', 'Espaço cadastrado com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.error('Erro ao salvar espaço:', error);
            Alert.alert('Erro', 'Erro ao salvar espaço!');
        }
    };

    return (
        <View style={styles.container}>

            <View>

                <View>
                    <Text style={styles.subTitles}>Nome do Espaço</Text>
                    <TextInput style={styles.textInput}
                        mode="outlined"
                        placeholder="Adicione um nome do espaço"
                        placeholderTextColor="#7F7F7F"
                        value={nomeEspaco}
                        onChangeText={text => setNomeEspaco(text)}
                        underlineColor="transparent"
                    />
                </View>

                <View>
                    <Text style={styles.subTitles}>Capacidade máximo de pessoas</Text>
                    <TextInput style={styles.textInput}
                        mode="outlined"
                        placeholder="Coloque a capacidade máxima do espaço"
                        placeholderTextColor="#7F7F7F"
                        value={capacidadeMaxima}
                        onChangeText={text => setCapacidadeMaxima(text)}
                        keyboardType="numeric"
                        underlineColor="transparent"
                    />
                </View>


                <View>
                    <Text style={styles.subTitles}>Tempo máximo de reserva (Minutos)</Text>
                    <TextInput
                        mode="outlined"
                        style={styles.textInput}
                        placeholder="Coloque o tempo máximo de reserva (minutos)"
                        placeholderTextColor="#7F7F7F"
                        value={tempoMaximo.toString()} 
                        onChangeText={text => setTempoMaximo(parseInt(text) || 0)} 
                        keyboardType="numeric"
                        underlineColor="transparent"
                    />
                </View>

                <View>
                    <Text style={styles.subTitles}>Instruções</Text>
                    <TextInput style={styles.textInput}
                        mode="outlined"
                        placeholder="Coloque as regras do espaço"
                        placeholderTextColor="#7F7F7F"
                        value={textoInstrucoes}
                        onChangeText={text => setTextoInstrucoes(text)}
                        underlineColor="transparent"
                        multiline={true} 
                        numberOfLines={4} // Define o número inicial de linha
                    />
                </View>

                <View>
                    <Button style={styles.buttonSalvar} onPress={handleSalvar}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </Button>
                </View>

                <Image style={styles.imageLogo}
                    source={require('../../assets/LogoCondo2.png')}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        borderBottomWidth: 2, 
        borderBottomColor: '#7F7F7F', 
        marginBottom: 20,
        paddingBottom: 20,

    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'poppins',
        color: '#7F7F7F',
    },

    subTitles: {
        fontSize: 20,
        fontWeight: 'semibold',
        color: '#7F7F7F',
        marginBottom: 5,
        fontFamily: 'poppins',
        textAlign: 'left',
    },


    textInput: {
        borderWidth: 2,
        borderColor: '#7F7F7F',
        backgroundColor: 'none',
        borderRadius: 10,
        marginBottom: 10,
        width: '100%',
        minHeight: '3%',
        maxHeight: 'auto',
    },

    buttonSalvar: {
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#06B6DD', 
        width: '100%',
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
    },

    button: {
        margin: 0, 
    },

    imageLogo: {
        position: 'absolute',
        bottom: -290,
        left: -10,
        width: 180,
        height: 230,
        resizeMode: 'stretch',
        opacity: 0.5,
    }

});

export default CadastroEspacos;
