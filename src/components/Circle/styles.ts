import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

const Styles = StyleSheet.create({
    container: {
        width: 20, 
        height: 20, 
        borderRadius: 10, 
        flexDirection: 'column', 
        alignItems :'center', 
        justifyContent: 'center', 
        backgroundColor: Colors.principal
    },

    text: {
        color: Colors.textSecondary, 
        fontWeight: 'bold'
    }
})

export default Styles