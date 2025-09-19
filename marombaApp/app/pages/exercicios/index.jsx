import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Exercicios({navigation}){
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Seus treinos</Text>
            <View>
                <View style={estilos.cardTreino}>
                    <Text style={estilos.treinoTexto}>Treino Saitama</Text>
                    <TouchableOpacity style={estilos.botao} onPress={()=> navigation.navigate('Saitama')}>
                        <Text style={estilos.botaoTexto}>Ver Treino</Text>
                    </TouchableOpacity>
                </View>
                <View style={estilos.cardTreino}>
                    <Text style={estilos.treinoTexto}>Treino Broly</Text>
                    <TouchableOpacity style={estilos.botao} onPress={()=> navigation.navigate('Broly')}>
                        <Text style={estilos.botaoTexto}>Ver Treino</Text>
                    </TouchableOpacity>
                </View>
                <View style={estilos.cardTreino}>
                    <Text style={estilos.treinoTexto}>Treino Might Guy</Text>
                    <TouchableOpacity style={estilos.botao} onPress={()=> navigation.navigate('MightGuy')}>
                        <Text style={estilos.botaoTexto}>Ver Treino</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const estilos = StyleSheet.create({
    container:{
        backgroundColor: '#000',
        alignItems: 'center',
        height: '100%'
    },
    titulo:{
        color: '#FFD700',
        fontSize: 25
    },
    cardTreino:{
        borderColor: '#FFD700',
        borderWidth: 1,
        backgroundColor: '#000',
        borderRadius: 10,
        width: 300,
        padding: 10,
        margin: 10
    },
    botao:{
        backgroundColor: '#FFD700',
        borderRadius: 10,
        marginTop: 10,
        width: '25%',
        height: 25
    },
    botaoTexto:{
        fontWeight: 'bold'
    },
    treinoTexto:{
        color: '#fff',
        fontSize: 18
    }
});