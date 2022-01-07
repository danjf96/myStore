import { Platform, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";
import { GlobalStyle } from "../../assets/GlobalStyles";

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

    containerSearch: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },

    input: {
        width :'80%',
        height: 40,
        elevation: 2,
        backgroundColor: 'white',
        ...Platform.OS == 'ios' ?
        {
            shadowColor: Colors.backgroundModal,
            shadowOffset: { 
                width: 0, 
                height: 4 
            },
            shadowOpacity: 0.2,
            shadowRadius: 2
        } : {},
        borderRadius: 15,
        paddingHorizontal: 10
    },

    button: {
        backgroundColor: Colors.principal,
        width: 40,
        height: 40,
        borderRadius: 10,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        elevation: 2,
        ...Platform.OS == 'ios' ?
        {
            shadowColor: Colors.backgroundModal,
            shadowOffset: { 
                width: 0, 
                height: 4 
            },
            shadowOpacity: 0.2,
            shadowRadius: 2
        } : {},
    },

    line: { 
        ...GlobalStyle.line
    }
})

export default Styles