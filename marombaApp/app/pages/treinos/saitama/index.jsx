import { Text, View, Image, StyleSheet } from "react-native";
import SaitamaFoto from '../../../../assets/images/saitama.png'

export default function Saitama(){
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Treino do Saitama</Text>
            <Image source={SaitamaFoto} style={estilos.imagem}></Image>
            <View style={estilos.cardTreino}>
                <Text style={estilos.tituloSeries}>Realizar o treino todos os dias</Text>
                <li style={estilos.textoSeries}>100 flexões</li>
                <li style={estilos.textoSeries}>100 abdominais</li>
                <li style={estilos.textoSeries}>100 agachamentos</li>
                <li style={estilos.textoSeries}>10 km de corrida (sem parar)</li>
                <Text style={estilos.textoAviso}>Aviso: Dormir sem ar-condicionado, mesmo que esteja calor e sem falta um dia de treino na semana</Text>
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