import { TextInput, TextInputProps } from "react-native";
import { styles } from "./style";

// Função exportável que acessa todas as propriedades de TextInput
export function Input({...rest}: TextInputProps){
    return (
        <TextInput {...rest} style = {styles.input}/>
    )
}