import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { ScrollView, View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import Logo from "../../../assets/images/logoErikNews.png"
import Amazonia from "../../../assets/images/amazonia.png"
import Mulher from "../../../assets/images/mulher.png"
import Cozinheiro from "../../../assets/images/cozinheiro.png"



export default function Jornal() {
    return (
        <ScrollView style={estilos.container} contentContainerStyle={estilos.conteudo}>
            <View style={estilos.cabecalho}>
                <View style={estilos.senai}>
                    Senai
                </View>
                <View style={estilos.sesi}>
                    SESI
                </View>
                <View style={estilos.lima}>
                    Lima
                </View>
                <View>
                    👤 Conta Erik
                </View>
            </View>
            <View style={estilos.containerLogo}>
                <Image source={Logo} style={estilos.logo}/>
            </View>
            <View style={estilos.campoNoticias}>
                <View>
                    <View style={estilos.campoNoticias}>
                        <Text style={estilos.tituloNoticias}>Fogo vira vilão na Amazônia: alertas de desmatamento sobem 4%, diz governo; Cerrado e Pantanal têm queda</Text>
                        <Image source={Amazonia} style={estilos.imagensNoticias}/>
                        <Text style={estilos.textoNoticias}>A mudança climática gerou condições para que o fogo se transforme em um novo desafio para os responsáveis por frear a devastação na Amazônia. Dados divulgados nesta quinta-feira (7) apontam que o acumulado de alertas de desmatamento na Amazônia Legal teve aumento de 4% na temporada 2024/2025.

    Segundo análise do Instituto Nacional de Pesquisas Espaciais (Inpe) e do Ministério do Meio Ambiente (MMA), o aumento teve relação direta com mais áreas destruídas por incêndios.</Text>
                    </View>
                </View>
                <View>
                    <View style={estilos.campoNoticias}>
                        <Text style={estilos.tituloNoticias}>Homem é preso suspeito de estuprar, agredir e perseguir ex-namorada em Maceió</Text>
                        <Image source={Mulher} style={estilos.imagensNoticias}/>
                        <Text style={estilos.textoNoticias}>A Polícia Civil prendeu, na última quarta-feira (6), um homem de 44 anos suspeito de perseguir, ameaçar, agredir e estuprar a ex-namorada. A prisão aconteceu no bairro de Mangabeiras, em Maceió. De acordo com a polícia, a vítima tem 45 anos e conviveu com o suspeito por cerca de 15 anos em uma relação abusiva, marcada por agressões verbais e físicas.

    No dia 18 de julho, o homem ligou 23 vezes para a vítima e ameaçou incendiar a casa, além de matá-la. A ação desrespeitava as medidas protetivas que estava em vigor, segundo a Polícia Civil.

    A investigação policial descobriu ainda que o homem chegou a estacionar um motorhome, um veículo similar a um trailer, em frente a casa da vítima. Para a polícia, a ação tinha como objetivo intimidar a mulher.</Text>
                    </View>
                </View>
                <View>
                    <View style={estilos.campoNoticias}>
                        <Text style={estilos.tituloNoticias}>Chef de cozinha diagnosticado com leishmaniose e tuberculose morre aos 30 anos em Teresina</Text>
                        <Image source={Cozinheiro} style={estilos.imagensNoticias}/>
                        <Text style={estilos.textoNoticias}>José Micael Morais Sampaio, de 30 anos, chef de cozinha natural de Fortaleza (CE), faleceu na terça-feira (5) em Teresina, no Instituto Natan Portella, após ser diagnosticado com leishmaniose e tuberculose. A informação foi confirmada ao g1 pelo companheiro da vítima, Misael Davi.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
    },
    conteudo:{
        padding: 20,
        paddingBottom: 40
    },
    cabecalho:{
        fontSize: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#cfcbcbff'
    },
    logo:{
        width: 300,
        height: 300
    },
    containerLogo:{
        alignItems: 'center'
    },
    senai:{
        color: 'blue'
    },
    sesi:{
        color: 'red'
    },
    lima:{
        color: '#fff'
    },
    campoNoticias:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        gap: 10,
                backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        elevation: 1,

    },
    imagensNoticias:{
        width: 100,
        height: 100
    },
    tituloNoticias:{
        fontSize: 22,
        fontWeight: 'bold'
    },
    textoNoticias:{
        fontSize: 20,
        color: 'gray',
        textAlign: 'justify'
    }
})