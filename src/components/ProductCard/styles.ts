import { Platform, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    containerCard: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-between'
        borderRadius: 10,
        elevation: 2,
        backgroundColor: 'white',
        ...Platform.OS == 'ios' ?
        {
            shadowColor: 'black',
            shadowOffset: { 
                width: 0, 
                height: 4 
            },
            shadowOpacity: 0.5,
            shadowRadius: 2
        } : {}
    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 15
    },

    name: {
        fontSize: 18,
        marginBottom: 5,
        color: 'black'
    },

    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    }


})

export default Styles