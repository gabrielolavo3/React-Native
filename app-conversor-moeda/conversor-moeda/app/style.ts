import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    central: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'pink',
    },
  
    titulo: {
      fontSize: 20,
    },

    caixa: {
        backgroundColor: 'white',
        width: '70%',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
    },

    ctitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2196F3'
    },

    cinput: {
        width: '100%',    
        borderWidth: 1,
        borderColor: '#2196F3',
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
    },

    cbutton: {
        fontSize: 20,
        fontWeight: 'bold',
    }
  })