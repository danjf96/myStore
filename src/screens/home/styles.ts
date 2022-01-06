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
    }
})

export default Styles