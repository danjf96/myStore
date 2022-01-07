import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

const Styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: '100%',
        backgroundColor: Colors.principal,
        flexDirection: 'column',
        alignItems: 'center'
    },

    image: {
        width: '90%',
        resizeMode: 'contain'
    },

    title: {
        fontSize: 25,
        color: Colors.textSecondary,
        fontWeight: 'bold',
        marginBottom: 40
    },

    text: {
        fontSize: 18,
        color: Colors.textSecondary,
        marginBottom: 20
    },

    textTwo: {
        fontSize: 18,
        color: Colors.textSecondary,
        marginRight: 10
    }
})

export default Styles