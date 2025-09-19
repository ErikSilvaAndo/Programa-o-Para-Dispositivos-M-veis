import { Text, TextInput, View, Image, Pressable, SafeAreaView, ScrollView } from "react-native";
import Curbelo from "../../assets/images/curbelo.png"
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={estilos.safeArea}>
    <View style={estilos.container}>
    <ScrollView>

    <Image source={Curbelo} style={estilos.Curbelo}/>
      <View style={estilos.camposForm}>

        <View>
        <Text style={estilos.label}>Nome</Text>
        <TextInput style={estilos.campoTexto}/>
        </View>

        <View>
        <Text style={estilos.label}>Endereço</Text>
        <TextInput style={estilos.campoTexto}/>
        </View>

        <View>
        <Text style={estilos.label}>Telefone</Text>
        <TextInput style={estilos.campoTexto}/>
        </View>

        <View>
        <Text style={estilos.label}>E-mail</Text>
        <TextInput style={estilos.campoTexto}/>
        </View>

        <View>
        <Text style={estilos.label}>Status</Text>
        <TextInput style={estilos.campoTexto}/>
        </View>

        <Pressable style={estilos.botao}>
          <Text style={estilos.textoBotao}>Cadastro</Text>
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
    backgroundColor: '#f5f5f5',
  },
  camposForm:{
    width: '100%',
  },
  label:{
    fontSize: 16,
    marginBottom: 8,
  },
  campoTexto:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  botao:{
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
    padding: '10px',
    alignItems: 'center',
    backgroundColor: '#4453f5ff',
  },
  textoBotao:{
    color: '#ffffff',
    fontSize: '23px',
  }
})