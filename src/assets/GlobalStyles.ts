import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const LOGO = require('../assets/images/logo.png')

export const GlobalStyle = StyleSheet.create({
    line: {
        width: '100%', 
        marginVertical: 25, 
        borderWidth: 0.3,
        borderColor: Colors.principal,
        opacity: 0.2
    }
})
