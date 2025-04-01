import { useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { router } from 'expo-router' // Importanto biblioteca de navegação de páginas
import { Button } from '@/components/button' // Importanto o componente de Button
import { Input } from '@/components/input' // Importanto o componente de TextInput (Input)

// Cada componente importado recebe automaticamente uma tag com o nome da função exportável

export default function Index(){
    /*
    Captura de dados pelo TextInput

    const [variavelRecolhe, varMudaDado] = useState[tipoDado]

    useState serve para capturar e salvar um dado
    Exemplo: const [name, setName] = useState<string>()
    */ 
    
    const [name, setName] = useState("")

    // Função para aplicar a navegação para a próxima página
    function nextPag() {
        router.navigate("/dashboard")
    }

    // Função para capturar entrada de texto
    function onChangeText(text: string) {
        console.log(text)
        setName(text)
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.titulo}>Oi, {name}</Text>

            <Input onChangeText={setName}/>            
            <Button title="Continuar" onPress={nextPag} activeOpacity={0.3}/> {/* Uso do arquivo button */}
            
            {/* <Input onChangeText={(text) => console.log(text)}/> */}
            {/* <Input onChangeText={(text) => onChangeText(text)}/> */}
            {/* <Input onChangeText={(text) => setName(text)}/> */}
            {/* <Button title="Sair"/>  */}

            {/* <Button title='Enviar' onPress={alertMessager}/> */}
        </View>
    )
}

// Objeto de estilização
const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa o espaço disponível da viewport
        padding: 32,
        justifyContent: "center",
        gap: 16
    },

    titulo: {
        color: "purple",
        fontSize: 24,
        fontWeight: "bold"
    }
})