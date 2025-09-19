import { Text, View, TouchableOcupacity, StyleSheet } from 'react-native'

export default function Home({navigation}){
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Página inicial</Text>
            <Text style={estilos.subtitulo}>Página principal do aplicativo</Text>
            <TouchableOcupacity title="Abrir a página Detalhes" onPress={() => navigation.navigate('Detalhes', {itemId: 1, itemNome: 'Item de Exemplo'})} style={estilos.botao}>
                <Text style={[estilos.subtitulo, {color: '#fff'}]}>Detalhes</Text>
            </TouchableOcupacity>
        </View>
    );
};

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    titulo:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    subtitulo:{
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10
    },
    botao:{
        backgroundColor: '#386df4ff',
        width: '70%'
    }
})