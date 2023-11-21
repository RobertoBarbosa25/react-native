import React, { useState } from "react";
import { Button, View } from "react-native";
import Estilos from "../estilos";
import { Text } from "react-native";

export default ({ inicial = 0, passo = 1 }) => {
  const [numero, setNumero] = useState(inicial);
  const [resultadoParImpar, setResultadoParImpar] = useState("");

  function inc() {
    const novoNumero = numero + passo;
    setNumero(novoNumero);
    verificarParImpar(novoNumero);
  }

  function dec() {
    const novoNumero = numero - passo;
    setNumero(novoNumero);
    verificarParImpar(novoNumero);
  }

  const verificarParImpar = (valor) => {
    const resultado = valor % 2 === 0 ? "Par" : "Ímpar";
    setResultadoParImpar(resultado);
  };

  return (
    <>
      <Text style={Estilos.textDois}>{numero}</Text>
      <View style={{ flexDirection: "row" }}>
        <Button title="+" onPress={inc} />
        <Button title="-" onPress={dec} />
      </View>
      <Button title="Verificar Par/Ímpar" onPress={() => verificarParImpar(numero)} />
      <Text style={Estilos.textDois}>{resultadoParImpar}</Text>
    </>
  );
};