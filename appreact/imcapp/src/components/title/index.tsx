import React from "react";
import { View, Text } from 'react-native'
import { styles } from "./style"

export default function Title() {
    return (
        <View style = {styles.boxTitulo}>
            <Text style = {styles.txtTitle}>BODY HEALTH</Text>
        </View>
    )
}