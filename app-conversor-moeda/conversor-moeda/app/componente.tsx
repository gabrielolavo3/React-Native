import { Text, View, Button, TextInput } from 'react-native'
import { styles } from './style'
import React from 'react' // Importando elementos do React.JS para o Native

export default function Component(){
    return (
        <View style = {styles.caixa}>
            <Text style = {styles.ctitle}>Valor:</Text>
            <TextInput style = {styles.cinput} keyboardType='numeric'/> {/* Tag auto-executavel */}
            <Button title='Converter'/>
        </View>
    )
}