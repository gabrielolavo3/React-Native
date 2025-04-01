import { View, Text, StyleSheet } from "react-native"
import { router } from "expo-router" // Importanto biblioteca de navegação de páginas
import { Button } from "@/components/button"

export default function Dashboard() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Dashboard</Text>
            <Button title="Voltar" onPress={()=> router.back()}/> {/* Aplica a rota de retorno para a tela anterior */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 32,
        gap: 16
    },

    title: {
        fontSize: 18,
        fontWeight: "bold"
    }
})