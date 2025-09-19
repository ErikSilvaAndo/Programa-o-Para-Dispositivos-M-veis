import { Text, TextInput, View, Image, Pressable, SafeAreaView, ScrollView } from "react-native";
import Curbelo from "../../assets/images/curbelo.png"
import { StyleSheet } from "react-native";

export default function Exercicio() {
    return (
    <SafeAreaView style={estilos.safeArea}>
    <View style={estilos.container}>
    <Image source={Curbelo} style={estilos.Curbelo}/>
    <ScrollView>

        <View style={estilos.camposForm}>

        <View style={estilos.campoLabel}>
        <Text style={estilos.label}>Nome</Text>
        <TextInput style={estilos.campoTexto}/>
        </View>

        <View style={estilos.campoLabel}>
        <Text style={estilos.label}>End.</Text>
        <TextInput style={estilos.campoTexto}/>
        </View>

        <View style={estilos.campoLabel}>
        <Text style={estilos.label}>Tel.</Text>
        <TextInput style={estilos.campoTexto}/>
        </View>

        <View style={estilos.campoLabel}>
        <Text style={estilos.label}>E-mail</Text>
        <TextInput style={estilos.campoTexto}/>
        </View>

        <View style={estilos.campoLabel}>
        <Text style={estilos.label}>Status</Text>
        <TextInput style={estilos.campoTexto}/>
        </View>

        <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Cadastro ⤍</Text>
        </Pressable>
        </View>
    </ScrollView>
    </View>
    </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container:{
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'yellow',
    },
    Curbelo:{
    width: '120px',
    height: '120px',
    borderRadius: 60,
    marginTop: 40,
    marginBottom: 40,
    },
    safeArea:{
    flex: 1,
    backgroundColor: 'yellow',
    },
    camposForm:{
    width: '100%',
    },
    label:{
    fontSize: 16,
    marginBottom: 8,
    color: 'purple',
    fontWeight: 'bold',

    },
    campoLabel:{
        flexDirection: 'row',
        padding: '10px',
        margin: '10px',
        justifyContent: "space-around",
        gap: 10
    },
    campoTexto:{
    height: 40,
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    },
    botao:{
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 100,
    marginBottom: 20,
    width: '100%',
    padding: '10px',
    alignItems: 'center',
    backgroundColor: 'purple',
    },
    textoBotao:{
    color: '#ffffff',
    fontSize: '23px',
    fontWeight: 'bold'
    }
})