import { Text, View, FlatList, StyleSheet, Image } from "react-native";
import BrolyFoto from '../../../../assets/images/broly.png'

const treinos = [
    { id: '1', dia: 'Segunda-feira', treino: 'Ombro'},
    { id: '2', dia: 'Terça-feira', treino: 'Ombro e Peito'},
    { id: '3', dia: 'Quarta-feira', treino: 'Ombro e Braços'},
    { id: '4', dia: 'Quinta-feira', treino: 'Ombro e Costas'},
    { id: '5', dia: 'Sexta-feira', treino: 'Ombro e Braços'},
    { id: '6', dia: 'Sabádo', treino: 'Ombro e Perna'},
    { id: '7', dia: 'Domingo', treino: 'Bater nas pessoas & FullBody'}
]

export default function Broly(){
    return(

    <View style={estilos.container}>
        <Text style={estilos.titulo}>Treino do Broly</Text>
        <Image source={BrolyFoto} style={estilos.imagem}></Image>
        <View style={estilos.cardTreino}>
            <FlatList 
            data={treinos}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <View>
                    <Text style={estilos.tituloSeries}>{item.dia}</Text>
                    <Text style={estilos.textoSeries}>{item.treino}</Text>
                </View>
            )}
            />
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
    imagem:{
        width: 200,
        height: 200
    },
    textoSeries:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
    },
    tituloSeries:{
        fontSize: 25,
        color: '#FFD700',
        margin: 5
    },
    textoAviso:{
        color: '#ff0000',
        fontSize: 15,
        margin: 10
    },
    cardTreino:{
        borderWidth: 1,
        borderColor: '#FFD700',
        borderRadius: 5,
        margin: 15
    }
});