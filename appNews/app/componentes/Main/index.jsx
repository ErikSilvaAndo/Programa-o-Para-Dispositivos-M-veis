import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';

const Principal = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
                const dados = await resposta.json();
                
                const detalhes = await Promise.all(
                dados.results.map(async (poke) => {
                    const res = await fetch(poke.url);
                    return await res.json();
                })
            );

            setPokemons(detalhes);

            } catch (erro) {
                console.error('Erro ao buscar pokémons:', erro);
            }
        };

        fetchPokemons();
    }, []);

    return (
            <FlatList
                data={pokemons}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={estilos.card}>
                            <Image
                                source={{ uri: item.sprites.front_default}}
                                style={{ width: 100, height: 100 }}
                            />
                        <Text style={estilos.titulo}>{item.name}</Text>
                        <Text style={estilos.descricao}>Type: {item.types.map(t => t.type.name).join(", ")}</Text>
                        
                    </View>
                )}
            />
    );
};

const estilos = {
    card:{
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 1,
    },
    titulo:{
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'justify',
    },
    descricao: {
        color: '#000',
        fontSize: 16,
        textAlign: 'justify',
    },
}

export default Principal;

