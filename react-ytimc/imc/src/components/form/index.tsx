import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import ResultImc from "./resultImc"
import { styles } from "./style"

export default function Form() {

const [altura, setAltura] = useState(null)
const [peso, setPeso] = useState(null)
const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
const [imc, setImc] = useState(null)
const [textBtn, setTextBtn] = useState("Calcular")

function imcCalculo() {
    const alturaNum = parseFloat(altura)
    const pesoNum = parseFloat(peso)
    const valorImc = (pesoNum / (alturaNum * alturaNum)).toFixed(2)
    return setImc(valorImc)
}

function validacaoInfo() {
    if (altura != null && peso != null) {
        imcCalculo()
        setAltura(null)
        setPeso(null)
        setMessageImc("Seu IMC é igual:")
        setTextBtn("Calcular Novamente")
        return
    } 
    else {
        setImc(null)
        setTextBtn("Calcular")
        setMessageImc("Preencha o peso e altura")            
    }
}

    return (
        <View style = {styles.formContainer}>
            <View style = {styles.form}>
                <Text style = {styles.formLabel}>Altura</Text>
                <TextInput 
                    style = {styles.input}
                    placeholder="Ex. 1.69" 
                    keyboardType="numeric"
                    onChangeText={setAltura} 
                    value={altura}
                />
                <Text style = {styles.formLabel}>Peso</Text>
                <TextInput 
                    style = {styles.input}
                    placeholder="Ex. 75.82" 
                    keyboardType="numeric" 
                    onChangeText={setPeso} 
                    value={peso}
                />
                <TouchableOpacity style = {styles.btnCalcular} activeOpacity={0.7} onPress={validacaoInfo}>
                    <Text style = {styles.textBtnCalcular}>{textBtn}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc = {messageImc} resultImc = {imc}/>
        </View>
    )
}