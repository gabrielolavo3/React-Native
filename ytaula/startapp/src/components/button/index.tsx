import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"
import { styles } from "./style" // Importanto estilos

// // Definindo tipagem para componentes TypeScript
// type Props = {
//     title: string
//     onPress: ()=> void Tipando propriedades
// }

type Props = TouchableOpacityProps & {
    title: string    
}

// Criando um btn estilizado
export function Button({ title, ...rest }: Props) {
    return (
        <TouchableOpacity activeOpacity={0.7} style = {styles.button} {...rest}>
            <Text style = {styles.titulo}>{title}</Text>
        </TouchableOpacity>
    )
}

// O ...rest serve para pegar todas as propriedades de um componente implicitamente
// Todo componente em React possui um elemento irmão Props, que acessa todas as suas propriedades para reutilização