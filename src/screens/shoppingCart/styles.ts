import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

const Styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: '100%',
        backgroundColor: Colors.principal,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        width: '90%',
        resizeMode: 'contain'
    },

    productContainer: {
        marginBottom: 12
    },

    price: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        color: Colors.principal
    },

    footer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'white'
    },

    button: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: Colors.principal,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },

    buttonText: {
        color: Colors.textSecondary,
        fontSize: 18,
        fontWeight:'bold'
    },

    buttonTwo: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: Colors.secondary,
        borderWidth: 1,
        borderColor: Colors.principal,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },

    buttonTextTwo: {
        color: Colors.principal,
        fontSize: 18,
        fontWeight:'bold',
        textAlign: 'center'
    }
})

export default Styles