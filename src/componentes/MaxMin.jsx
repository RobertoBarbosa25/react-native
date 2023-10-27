import React from "react";
import { Text, View } from "react-native";


export const NewMaxMin = ({x,y}) => {

    const result = x > y ? `Valor ${x} é maior que valor ${y}` :
    x === y ? `Valores ${x} e ${y} são iguais` : `Valor ${y} é maior que valor ${x}`
    return(
        <View>
            <Text>{result}</Text>
        </View>

    )
}

