import { Text, View } from "react-native";
import ImagemRoxa from '../assets/images/imagemRoxa.png'
import ImagemVerde from '../assets/images/telaVerde.png'
import ImagemAzul from '../assets/images/ImagemAzul.png'
import TelaRoxa from './componentes/TelaRoxo'
import TelaVerde from './componentes/TelaVerde'
import TelaAzul from './componentes/TelaAzul'

export default function Index() {
  return (
    <>
    <TelaAzul imagem={ImagemAzul}/>
    </>
  );
}

      // <TelaVerde imagem={ImagemVerde}/>
            // <TelaRoxa imagem={ImagemRoxa}/>