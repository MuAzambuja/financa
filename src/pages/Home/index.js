import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '300,90',
        date: '17/09/2023',
        type: 0 //despesas
    },
    {
        id: 2,
        label: 'Pix Cliente X',
        value: '2500,00',
        date: '17/09/2023',
        type: 1 //receita (entradas)
    },
    {
        id: 3,
        label: 'Salário',
        value: '7200,00',
        date: '17/09/2023',
        type: 1 //despesas
    },
]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Murilo Azambuja" />
            <Balance saldo="9.250,37" gastos="-527,88" />
            <Actions />
            <Text style={styles.title}>últimas movimentações</Text>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    },
});
