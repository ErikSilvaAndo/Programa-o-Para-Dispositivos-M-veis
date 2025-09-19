import { Text, View, StyleSheet, ScrollView } from "react-native";
import Lista from './componentes/lista'

const Cardapio = [
    {
    id: 1,
    titulo: 'Canelone',
    descricao: 'Massa em formato de tubos recheados com queijos, carnes ou vegetais, cobertos com molho e gratinados ao forno.',
    imagem: require('../assets/images/canelone.png')
    },
    {
    id: 2,
    titulo: 'Lasanha',
    descricao: 'Camadas intercaladas de massa, molho, recheio e queijo, assadas até ficarem douradas e saborosas.',
    imagem: require('../assets/images/lasanha.png')
    },
    {
    id: 3,
    titulo: 'Macarrão',
    descricao: 'Massa longa ou curta, servida com diversos tipos de molhos, como bolonhesa, carbonara ou ao alho e óleo.',
    imagem: require('../assets/images/macarrao.png')
    },
    {
    id: 4,
    titulo: 'Pizza',
    descricao: 'Disco de massa assada, coberta com molho de tomate, queijo e variados ingredientes, como calabresa, frango ou vegetais.',
    imagem: require('../assets/images/pizza.png')
    },
    {
    id: 5,
    titulo: 'Rondelli',
    descricao: 'Massa enrolada em formato cilíndrico, recheada e coberta com molho, geralmente assada.',
    imagem: require('../assets/images/rondelli.png')
    },

]

export default function Index() {
  return (
    <ScrollView>
    <View style={estilos.cabecalho}>
      <Text style={estilos.titulo}>Restaurante italiano</Text>
      <View style={estilos.container}>
        <Text>
          <Lista fotos={Cardapio}></Lista>
        </Text>
        <View style={estilos.footer}></View>
      </View>
    </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroundColor: '#ff0000'
  },
  cabecalho:{
    width: '100%',
    height: 60,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo:{
    fontSize: 29
  },
  footer:{
    backgroundColor: '#ff0000'
  }
})