import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import Dino from '../../../assets/img/dino.jpg'
import { TextInput } from 'react-native-web';

export default function Formulario(){
    return(
        <View style={estilos.container}>
            <Image source={Dino} style={estilos.dino}></Image>
            <Text style={estilos.titulo}>Big Neck's System</Text>
            <Text>Olá, eu sou o BigNeck extinto a mais de mil anos, o RaphaGod ou RG me criou.</Text>
            
            <View style={estilos.campoTexto}>
                <Text style={estilos.label}>Nome:</Text>
                <TextInput style={estilos.input}></TextInput>
            </View>

            <View style={estilos.campoTexto}>
                <Text style={estilos.label}>Email:</Text>
                <TextInput style={estilos.input}></TextInput>
            </View>

            <View style={estilos.campoTexto}>
                <Text style={estilos.label}>Telefone:</Text>
                <TextInput style={estilos.input}></TextInput>
            </View>

            <View style={estilos.campoTexto}>
                <Text style={estilos.label}>RA:</Text>
                <TextInput style={estilos.input}></TextInput>
            </View>


            <Pressable style={estilos.botao}>
                <Text style={estilos.textoBotao}>Cadastrar</Text>
            </Pressable>
        </View>

    );
};
// O view é como uma div
// O Image é uma imagem
// O Text é um label
// O Pressable é tipo um botão

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dino:{
        width: 150,
        height: 150
    },
    titulo:{
        fontSize: 30,
        marginBottom: 20
    },
    input:{
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        width: 250,
        height: 40,
        padding: 10,
        marginTop: 10
    },
    campoTexto:{
        width: '100%',
        alignItems: 'center',
        marginBottom: 10
    },
    label:{
        fontSize: 20,
        marginBottom: 5
    },
    botao:{
        marginTop: 20,
        width: 260,
        height: 50,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    textoBotao:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})