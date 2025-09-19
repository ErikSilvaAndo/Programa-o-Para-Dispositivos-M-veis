import { Text, View, FlatList, StyleSheet, Image, ScrollView } from "react-native";
import GuyFoto from '../../../../assets/images/mightGuy.png'

const treinos = [
    { id: '1', dia: 'Segunda-feira', treino: "Corrida: 5km,\nFlexões: 5x20,\nAgachamento com salto: 5x15,\nBarra fixa pegada aberta: 5x até a falha,\nPrancha + socos lentos: 4x 1min"},
    { id: '2', dia: 'Terça-feira', treino: 'Agachamento livre: 5x12,\nAvanço (passada): 4x20 cada perna,\nStiff: 4x10,\nPanturrilha em pé: 6x20,\nCorrida em escada ou subida: 10 tiros curtos'},
    { id: '3', dia: 'Quarta-feira', treino: 'Sprints curtos (100m): 10 tiros (descanso leve entre eles),\nPliometria com caixa (jump box): 5x12,\nBurpees: 4x20,\nCorrida ninja 2 km (100% velocidade),\nFlexibilidade (alongamento completo de pernas e quadril)'},
    { id: '4', dia: 'Quinta-feira', treino: 'Flexões diferentes (normal, diamante, arqueiro): 5x15 cada,\nBarra fixa pegada supinada: 5x até falha,\nAbdominal infra + prancha lateral: 4x 20 + 3x 45s cada lado,\nAbdominal em L-sit (na barra): 4x10,\nExercícios de soco com peso leve: 3x1min'},
    { id: '5', dia: 'Sexta-feira', treino: 'Corrida longa: 8-10 km,\nFlexões normais: 300 (dividir em séries, ex: 6x50),\nAgachamentos normais: 300,\nPrancha: 5x 1min, Kata de taijutsu ou sombra (5 min sem parar)'},
    { id: '6', dia: 'Sabádo', treino: 'Sparring ou sombra: 6x 3min (intervalo 1 min),\nSequência de chutes alternados (esquerda/direita): 5x50,\nSequência de socos rápidos (máxima velocidade): 5x100,\nFlexões de punho (para fortalecer mãos): 3x15, Alongamento dinâmico + meditação'},
    { id: '7', dia: 'Domingo', treino: 'Alongamento profundo,\nMeditação (respiração controlada),\nCaminhada leve'}
]

export default function MightyGuy(){
    return(
    <ScrollView>
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Treino do Broly</Text>
            <Image source={GuyFoto} style={estilos.imagem}></Image>
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
    </ScrollView>
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
        fontSize: 15,
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