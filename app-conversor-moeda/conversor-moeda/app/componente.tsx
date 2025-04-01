import { Text, View, Button, TextInput } from 'react-native'
import { styles } from './style'
import React, { useState } from 'react' // Importando elementos do React.JS para o Native e o useState

export default function Component(){
    // useState serve para salvar um valor em uma variável
    // setMoeda pegar o valor e leva para moeda
    const [moeda, setMoeda] = useState ('')

    function converter(valor) {
        if (valor == '') 
        {
            alert("Campo vázio")
        }
        else 
        {
            alert(`Valor dolar: $${(valor/5.60).toFixed(2)}\n\nValor euro: $${(valor/6.18).toFixed(2)}`)
        }
    }

    return (
        <View style = {styles.caixa}>
            <Text style = {styles.ctitle}>Valor:</Text>
            {/* Tag auto-executavel */}
            <TextInput style = {styles.cinput} keyboardType='numeric'
            value = {moeda} onChangeText = {setMoeda}/> 
            <Button title='Converter' 
            onPress={()=>converter(moeda)}/> {/* Ativa uma função ao prescionar */}
        </View>
    )
}
