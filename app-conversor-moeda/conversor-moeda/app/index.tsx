import { View, Text } from 'react-native'
import { styles } from './style' // Importando o arquivo styles.ts
import Component  from './componente' // Importando o arquivo componente.tsx

export default function App(){
  return (
    <View style = {styles.central}>
      <Text style = {styles.titulo}>Sistema Conversor de Moedas</Text>
      <Component/> {/* Chamando o código do componente.tsx */}
    </View>
  ) 
}