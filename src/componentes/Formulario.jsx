import React, {useState} from 'react'
import { View, TextInput, Button } from 'react-native'

const Formulario = () => {

  let [email, setEmail] = useState('')
  let [senha, setSenha] = useState('')

  const exibirDados = _=>{
    console.warn({email, senha})
  }

  return (
    <View>
        <TextInput
        style={{borderBottomWidth: 2.0}}
        placeholder='Digite seu email'
        value={email}
        onChangeText={email => setEmail(email)}

        />

        <TextInput
        style={{borderBottomWidth: 2.0}}
        placeholder='Digite sua senha'
        value={senha}
        onChangeText={senha => setSenha(senha)}
        secureTextEntry={true}

        />
      
      <Button
        title='Me Mostre'
        onPress={exibirDados}
      
      />

    </View>
    
  )
}

export default Formulario