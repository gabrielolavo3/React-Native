import React from "react"
import { View, Text } from 'react-native'
import { styles } from "./style"

export default function Titulo() {
    return (
        <View style = {styles.containerTitle}>
            <Text style = {styles.textTitulo}>BODY HEALTH</Text>
        </View>
    )
}