import { StyleSheet } from 'react-native';
import prioridades from '../../prioridade/prioridade'
import { View, Image, Text, FlatList } from 'react-native-web';


export default function Tarefa(){
    const renderizaItem = ({ item }) => (
        <View style={estilos.item}>
            <View style={estilos.tituloImagem}>
                <Image style={estilos.imagem} source={item.imagem}></Image>
                <Text style={estilos.titulo}>{item.nome}</Text>
            </View>
            <Text style={estilos.info}>{item.descricao}</Text>
        </View>
    );
    return(
        <View style={estilos.container}>



            <FlatList 
            data={prioridades}
            renderItem={renderizaItem}
            keyExtractor={item => item.id}
            />
        </View>
    );
};

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        margin: 10,
        marginTop: 15
    },
    item:{
        backgroundColor: '#9BF2EA',
        padding: 20,
        marginTop: 5,
        marginVertical: 8,
        borderRadius: 10
    },
    titulo:{
        fontSize: 24,
        marginLeft: 10 
    },
    tituloImagem:{
        flexDirection: 'row'
    },
    info:{
        flexDirection: 'column',
        fontSize: 16
    },
    imagem:{
        width: 40,
        height: 40
    }
})