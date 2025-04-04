import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    formContainer: {
        width: '100%',
        height: '100%',
        bottom: 0,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },

    form: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10
    },

    formLabel: {
        color: 'black',
        fontSize: 18,
        paddingLeft: 20
    },

    input: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#F6F6F6',
        height: 40,
        margin: 12,
        paddingLeft: 10
    },

    btnCalcular: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor:'#FF0043',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30
    },

    textBtnCalcular: {
        fontSize: 20,
        color: 'white'
    }
})