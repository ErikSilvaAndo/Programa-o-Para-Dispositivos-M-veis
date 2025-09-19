// import Topo from './src/componentes/Topo';
// import Tarefa from './src/componentes/Tarefa';
import { StyleSheet } from 'react-native';
import { View } from 'react-native-web';
import ListaDeEstudo from './src/componentes/ListaDeEstudo';

export default function App() {
  return (
    <>
        <ListaDeEstudo></ListaDeEstudo>  
    </>

  );
}

const estilos = StyleSheet.create({
  tarefa:{
    marginLeft: 0,
    position: 'absolute',
    bottom: 50
    
  }
})
