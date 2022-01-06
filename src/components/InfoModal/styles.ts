import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

const Styles = StyleSheet.create({
    modal: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },

    containerBackground: {
        width:'100%',
        height:'100%',
        backgroundColor: Colors.backgroundModal,
        opacity: 0.8,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        position: 'absolute'
    },

    container: {
        width: '100%',
        padding: 24,
        paddingTop: 32,
        backgroundColor: Colors.secondary,
        borderRadius: 10
    },

    image: {
        width: 48, 
        height: 48,
        resizeMode: 'contain',
        marginBottom: 32
    },

    title: {
        fontSize: 20,
        lineHeight: 19.6,
        color: Colors.title,
        marginBottom: 24,
        fontWeight: 'bold'
    },

    text: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
        marginBottom: 24,
        color: Colors.text,
        textAlign: 'left'
    },

    containerTwo: {
        paddingHorizontal: 40, 
        width: '100%' 
    }

})

export const StylesFooter = StyleSheet.create({

    container: {
        width: '100%'
    },

    style: {
        backgroundColor: Colors.principal,
        height: 56,
        borderRadius: 10,
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center' ,
        marginBottom: 15   
    },

    textStyle: {
        color: Colors.textSecondary,
        fontSize: 16,
        fontWeight: 'bold'
    },

    textSecondStyle: {
        color: Colors.principal,
        fontSize: 16,
        fontWeight: 'bold'
    },

    styleSecond: {
        backgroundColor: Colors.secondary,
        height: 56,
        borderRadius: 10,
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.principal,
        borderWidth: 1.5
    }
})

export default Styles