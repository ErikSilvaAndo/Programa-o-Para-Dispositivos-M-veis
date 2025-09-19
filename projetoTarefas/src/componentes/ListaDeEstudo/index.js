import { Text, View, StyleSheet } from "react-native";

export default function ListaDeEstudo(){
    return(
        <>
            <View style={estilos.container}>
                <View>
                    <View style={estilos.tituloBox}>
                        <Text style={estilos.titulo}>Lista de Estudos</Text>
                    </View>
                    <View style={estilos.tarefasBox}>
                        <Text style={estilos.tarefasTitulo}>Tarefa de fisíca</Text>
                        <Text>Faça você mesmo número 2</Text>
                    </View>
                    <View style={estilos.tarefasBox}>
                        <Text style={estilos.tarefasTitulo}>Trabalho de Geografia</Text>
                        <Text>O centessímo trabalho de geografia do ano</Text>
                    </View>
                    <View style={estilos.tarefasBox}>
                        <Text style={estilos.tarefasTitulo}>Atividades de inglês</Text>
                        <Text>Pesquisar os prefixos "pre-" e "inter-" e realizar atividade 6 e 7.</Text>
                    </View>
                </View>
            </View>
    </>
    );
};

const estilos = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex: 1,
        width: '100%',
    },
    tituloBox:{
        backgroundColor: 'blue',
        justifyContent: 'center',
        width: '100vw',
        height: 50,
        marginTop: 40
    },
    titulo:{
        fontSize: 20,
        color: 'white',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    tarefasBox:{
        backgroundColor: '#D3D3D3',
        justifyContent: 'center',
        padding: 5,
        marginBottom: 5
    },
    tarefasTitulo:{
        alignItems: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 5
    }
})