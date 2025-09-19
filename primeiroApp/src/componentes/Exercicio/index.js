import SESI from "../../../assets/img/SESI.jpg"
import { View, Image, Text, Pressable, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-web';


// O view é como uma div
// O Image é uma imagem
// O Text é um label
// O Pressable é tipo um botão

export default function Exercicio(){
    return(
        <>
            <View style={estilos.div}>
                <View style={estilos.container}>
                    <View style={estilos.caixa}>
                    <View style={estilos.header}>
                        <View>
                            <Image source={SESI} style={estilos.SESI}></Image>
                        </View>
                        <TextInput style={estilos.pesquisa} placeholder="Pesquisa    🔍"></TextInput>
                    </View>
                    <View>
                        <View>
                            <View>
                                  <Text style={estilos.seta}>←</Text>
                            </View>

                            <Text style={estilos.titulo}>Limpa Sesi </Text>
                            <Text style={estilos.vassoura}>🧹</Text>
                        </View>
                        <View>
                             <Text style={estilos.textoInput}>Nome</Text>
                             <TextInput style={estilos.input}></TextInput>
                             <Text style={estilos.textoInput}>O que você sujou?</Text>
                             <TextInput style={estilos.input}></TextInput>
                             <Text style={estilos.textoInput}>Departamento</Text>
                             <TextInput style={estilos.input}></TextInput>
                             <Text style={estilos.textoInput}>Telefone do responsável</Text>
                             <TextInput style={estilos.input}></TextInput>
                            <View style={estilos.divbotao}>
                             <Pressable style={estilos.botao}>
                                <Text style={estilos.textoBotao}>Submit</Text>
                             </Pressable>
                            </View>
                        </View>

                    </View>

                    </View>
                </View>
            </View>
        </>
    );
};

const estilos = StyleSheet.create({
    div:{
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    container:{
        // borderWidth: 2,
        // borderColor: 'black',
        // borderRadius: 5,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        width: '25%',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 6 },
        shadowOpacity: 0.50,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: 'red',
        margin: 100
    },
    caixa:{
        backgroundColor: 'white',
        width: '100%'
    },
    imagem:{
        backgroundColor: 'red',
    },
    vassoura:{
        fontSize: 100,
        position: 'absolute',
        left: 180,
        top: 10
    },
    SESI:{
        width: 125,
        height: 40,
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        flex: 1
    },
    seta:{
        fontSize: 40,
        fontWeight: 'bold'
    },
    titulo:{
        fontSize: 40,
        fontWeight: 'bold',

    },
    header:{
        backgroundColor: "#ff0000",
        borderRadius: 5,
        textAlign: 'center',
        alignItems: 'center',
        width: '100%'
    },
    pesquisa:{
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'black',
        width: '85%',
        height: 40,
        padding: 10,
        marginTop: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 100,
        marginTop: 10
    },
    input:{
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 100, 
        height: 30,
        marginTop: 10
    },
    textoInput:{
        fontSize: 20,
    },
    botao:{
        marginTop: 20,
        width: 260,
        height: 50,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 10

    },
    textoBotao:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    divbotao:{
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
});