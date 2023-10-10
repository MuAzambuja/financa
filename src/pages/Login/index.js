import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Platform, Link } from 'react-native';
import { Rotas } from '../Rotas/index'

export default function Login() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../images/wallet.png')}
                style={styles.logo}
            />
            <TextInput
                placeholder='Username ou e-mail'
                style={styles.input}
            />
            <TextInput
                placeholder='Senha'
                style={styles.input}
            />
            <View style={styles.forgotContainer}>
                <TouchableOpacity>
                    <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        /*backgroundColor: '#1C02BA',*/
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginTop: Platform.OS === 'android' ? '13%' : '20%',

    },
    input: {
        width: '90%',
        height: 42,
        backgroundColor: '#F4F3F3',

    },
    forgotContainer: {

    },
    forgotText: {

    },
    loginButton: {
        backgroundColor: '#1C02BA',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})