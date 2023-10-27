import Central from './src/Central';
import MaxMin, { NewMaxMin } from './src/componentes/MaxMin';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
export default function App(){
    return (
        <View style={style.AppNew}>
            <NewMaxMin x={10} y={5}/>
        </View> 
    );
    
}
 const style = StyleSheet.create({
    AppNew: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})