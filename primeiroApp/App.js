import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Formulario from './src/componentes/Formulario';
// import Exercicio from './src/componentes/Exercicio';

export default function App() {
  return (
    <Formulario></Formulario>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
