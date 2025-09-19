import { View, Text, Image, ScrollView, Pressable, ImageBackground, StyleSheet, Switch } from "react-native";
import Linhas from '../../../assets/images/linhas.png'
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";



export default function TelaRoxo({imagem}){
    const [ativo, setAtivo] = useState(false);
    const toggleTroca = () => setAtivo(prevState => !prevState);

    const mudaStatus = () => {
        setIsOn(!isOn);
    }

    return(
        <ScrollView>
            <View style={estilos.container}>
                    <LinearGradient colors={['#0F725C', '#041832', '#01080E']}>
                        <View>
                <ImageBackground source={Linhas} style={estilos.fundo}>
                            <Text style={estilos.titulo}>Que tal dar uma respirada?<br/><strong>Faça uma pausa curta!</strong></Text>
                            <Image source={imagem} style={estilos.imagem}/>
                            <View style={estilos.cardCardTimer}>
                                <View style={estilos.cardTimer}>
                                    <View style={estilos.cardTitulo}>
                                            <Text style={estilos.cardTituloTexto}>Foco</Text>
                                        <View style={estilos.cardTituloSelecionado}>
                                        <Text style={estilos.cardTituloTexto}>Descanso curto</Text>
                                        </View>
                                        <Text style={estilos.cardTituloTexto}>Descanso longo</Text>
                                    </View>
                                    <View style={estilos.cardTimerNumero}>
                                        <Text style={estilos.timer}>5:00</Text>
                                    </View>
                                    <View style={estilos.cardBotao}>
                                        <View style={estilos.botao}>
                                            <View style={estilos.cardBotaoTexto}>
                                                <Switch
                                                trackColor={{ false: '#000', true: '#B872FF' }}
                                                thumbColor={{ false: '#000', true: '#B872FF' }}
                                                onValueChange={toggleTroca}
                                                value={ativo}
                                                style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
                                                />
                                            </View>
                                        </View>
                                        <View style={estilos.cardTextoBotao}>
                                            <Text style={estilos.textoBotao}>Música</Text>
                                        </View>
                                    </View>
                                    <View style={estilos.espacamento}></View>
                                    <View style={estilos.cardCardComecar}>
                                        <View style={estilos.cardCardCardComecar}>
                                            <LinearGradient colors={['#B872FF', '#144480', '#144480']} style={estilos.linearGradient}>
                                                <Text style={estilos.textoComecar}>⏸️ Pausar</Text>
                                            </LinearGradient>
                                        </View>
                                    </View>
                                </View>
                            </View>
                                <View style={estilos.rodape}>
                                    <Text style={estilos.emAndamento}>#Em andamento</Text>
                                    <Text style={estilos.nomeTarefa}>Nome da tarefa em andamento</Text>
                                </View>
                        </ImageBackground>
                        </View>
                    </LinearGradient>
            </View>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    container:{
        flex: 1
    },
    imagem:{
        width: '400px',
        height: '400px'
    },
    titulo:{
        fontFamily: 'Unbounded',
        fontSize: 50,
        color: '#ffffff'
    },
    cardCardTimer:{
        alignItems: 'center',
        textAlign: 'center'
    },
    cardTimer:{
        backgroundColor: '#195196ff',
        borderRadius: '15px',
        width: '80%',
        opacity: '50%'
    },
    cardTitulo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '10px'
    },
    cardTituloSelecionado:{
        backgroundColor: '#02336fff',
        borderRadius: '8px',
        width: '125px',
        height: '20px'
    },
    cardTituloTexto:{
        fontFamily: 'Montserrat',
        fontSize: '18px',
        color: '#fff'
    },
    cardTimerNumero:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    timer:{
        fontSize: '112px',
        color: '#fff'
    },
    cardBotao:{
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    botao:{
        borderRadius: '24px',
        padding: '4px',
        width: '60px',
        height: '32px',
        backgroundColor: 'purple',
        color: '#fff',
        borderWidth: '1px',
        borderRadius: '50px',
        borderColor: '#fff',
    },
    bolaBotao:{
        width: '24px',
        height: '24px',
        borderRadius: '50px',
        backgroundColor: '#fff',
        marginBottom: '20px'
    },
    cardComecar:{
        justifyContent: 'center',
        textAlign: 'center',
    },
    cardCardComecar:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoComecar:{
        textAlign: 'center',
        fontSize: '18px',
        color: '#fff',
        gap: '10px',
        margin: '10px'
    },
    textoBotao:{
        color: '#fff',
        fontSize: '18px'
    },
    cardTextoBotao:{
        marginLeft: '10px'
    },
    cardCardCardComecar:{
        borderWidth: '1px',
        borderRadius: '50px',
        borderColor: '#fff'
    },
    linearGradient:{
        borderRadius: '50px'
    },
    espacamento:{
        marginTop: '20px'
    },
    emAndamento:{
        fontFamily: 'Montserrat',
        fontSize: '12.5px',
        color: '#fff'
    },
    nomeTarefa:{
        fontFamily: 'Montserrat',
        fontSize: '18px',
        color: '#fff'
    },
    rodape:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '18px',
        color: '#fff',
        marginTop: '10px'
    },
    card:{
        textAlign: 'center',
        justifyContent: 'center'
    },
    fundo:{
        height: '100%'
    }
})