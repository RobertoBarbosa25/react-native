import Central from './src/Central';
import Botao from './src/componentes/Botao';
import Contador from './src/componentes/Contador';
import MaxMin, { NewMaxMin } from './src/componentes/MaxMin';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
export default function App(){
    return (
        <View style={style.AppNew}>
            <Contador inicial={100} passo={10}/>
            <Contador/>
        </View> 
        
        
    );
    <NewMaxMin x={10} y={5}/>
     
    
}
 const style = StyleSheet.create({
    AppNew: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})