import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import Exercicios from '../pages/exercicios'
import Saitama from '../pages/treinos/saitama'
import Broly from '../pages/treinos/broly'
import MightGuy from '../pages/treinos/mightGuy'

const Stack = createNativeStackNavigator();

export default function Navigator(){
    return(
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
            <Stack.Screen name='Exercicios' component={Exercicios} options={{headerShown: false}} />
            <Stack.Screen name='Saitama' component={Saitama} options={{headerShown: false}} />
            <Stack.Screen name='Broly' component={Broly} options={{headerShown: false}} />
            <Stack.Screen name='MightGuy' component={MightGuy} options={{headerShown: false}} />
        </Stack.Navigator>
    );
};