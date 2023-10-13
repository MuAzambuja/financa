import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Rotas } from '../Rotas/index'
import { FontAwesome5 } from '@expo/vector-icons'

export default function Login() {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
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

                    <TouchableOpacity style={styles.gmailButton}>
                        <FontAwesome5 name='google' size={25} color='#0257be' />
                        <Text style={styles.gmailText}>Continue como MaZaM</Text>
                    </TouchableOpacity>

                    <View style={styles.divisor}>
                        <View style={styles.divisorLine}></View>
                        <Text style={{ marginHorizontal: '3%' }}>OU</Text>
                        <View style={styles.divisorLine}></View>
                    </View>
                    <View style={styles.signUpContainer}>
                        <Text style={styles.signUpText}>Não possui uma conta? </Text>
                        <TouchableOpacity>
                            <Text style={styles.signUpButton}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        /*backgroundColor: '#1C02BA',*/
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 350,
        marginTop: Platform.OS === 'android' ? '8%' : '10%',
        marginBottom: Platform.OS === 'android' ? '1%' : '5%',
    },
    input: {
        width: '90%',
        height: 42,
        backgroundColor: '#F4F3F3',
        marginBottom: 20,
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    forgotContainer: {
        width: '90%',
        paddingBottom: 5,
        paddingTop: 5,
        alignItems: 'flex-end',
    },
    forgotText: {
        color: '#0257be',
    },
    loginButton: {
        marginTop: '5%',
        backgroundColor: '#1C02BA',
        width: '90%',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    loginText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    gmailButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '8%',
    },
    gmailText: {
        color: '#0257be',
        paddingLeft: 8,
        fontSize: 15,
    },
    divisor: {
        marginTop: '8%',
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divisorLine: {
        width: '45%',
        height: 2,
        backgroundColor: '#EFEDED',
        borderRadius: 5,
    },
    signUpContainer: {
        flexDirection: 'row',
        marginTop: '8%',
    },
    signUpText: {
        fontSize: 15,
        color: '#C4C4C4',
    },
    signUpButton: {
        color: '#0257be',
        paddingLeft: 2,
        fontSize: 15,
        fontWeight: 'bold',
    },
})