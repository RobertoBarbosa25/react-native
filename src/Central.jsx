import React from "react";
import { Text } from  "react-native";
import Primeiro from './componentes/Primeiro'
import MaxMin from "./componentes/MaxMin";
import { View } from "react-native";


function Central () {
    return <Text>
        <View>
            <MaxMin x={10} y={5}/>
        </View>
        <Primeiro/>
        
        Ola Mundo
    </Text>

}

export default Central;