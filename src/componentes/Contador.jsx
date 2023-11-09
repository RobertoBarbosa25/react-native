import React, { useState } from "react";
import { Button, View } from "react-native";
import Estilos from "../estilos"
import { Text } from "react-native";

export default ({inicial = 0, passo = 1}) => {
    const [numero, setNumero] = useState(inicial);
    const [resultadoImparPar, setResultadoImparPar] = useState("");

    function inc(){
        setNumero(numero + passo);
    }
    function dec(){
        setNumero(numero - passo);
    }
    function numeroImparPar(valor){
        if ( valor % 2 === 0){
            setResultadoImparPar("Par");
        } else {
            setResultadoImparPar("Impar");
        }
    }
    return (
        <>
        <Text style={Estilos.textDois}>
            {numero}
        </Text>
        <View style={{flexDirection: "row"}}>
            <Button
                title="+"
                onPress={inc}
                
            />
            <Button
                title="-"
                onPress={dec}
                
            />
        </View>
        <Button title= "Verificar Impar ou Par" onPress={() => numeroImparPar(numero)} />
        <Text style={Estilos.textDois}>{resultadoImparPar}</Text>
        </>
    )
}