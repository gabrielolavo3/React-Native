import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style = {style.caixa}>
      <Text style = {style.texto}>Hello, World</Text>
    </View>
  );
}

const style = StyleSheet.create({
  caixa: {
    flex: 1,
    backgroundColor: 'purple'
  },

  texto: {
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: 30,
    margin: 'auto'
  }
})
