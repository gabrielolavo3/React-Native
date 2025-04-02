import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import ResultImc from "./resultimc";
import { styles } from "./style";

export default function Form() {
    const [height, setHeight] = useState<string | null>(null);
    const [weight, setWeight] = useState<string | null>(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
    const [imc, setImc] = useState<string | null>(null);
    const [textButton, setTextButton] = useState("Calcular");

    function imcCalculation(): void {        
        const heightNum = parseFloat(height);
        const weightNum = parseFloat(weight);
        const calculatedImc = (weightNum / (heightNum * heightNum)).toFixed(2);
        setImc(calculatedImc);
    }

    function validationImc(): void {
        if (height && weight) {
            imcCalculation();
            setMessageImc("Seu IMC é igual: ");
            setTextButton("Calcular Novamente");
        } 
        else {
            setImc(null);
            setMessageImc("Preencha o peso e altura");
            setTextButton("Calcular");
        }
    }

    return (
        <View style = {styles.formContainer}>
            <View style = {styles.form}>
                <Text style = {styles.formLabel}>Altura</Text>
                <TextInput
                    style = {styles.input}
                    value = {height || ""} onChangeText={setHeight}
                    placeholder="Ex. 1.75" keyboardType="numeric"
                />
                
                <Text style = {styles.formLabel}>Peso</Text>
                <TextInput
                    style = {styles.input}
                    value = {weight || ""} onChangeText={setWeight}
                    placeholder="Ex. 75.36" keyboardType="numeric"
                />

                <TouchableOpacity
                    style={styles.btnCalcular}
                    onPress={validationImc} activeOpacity={0.7}
                >
                    <Text style={styles.textButton}>{textButton}</Text>
                </TouchableOpacity>

                <ResultImc messageResultImc={messageImc} resultImc={imc} />
            </View>
        </View>
    );
}
