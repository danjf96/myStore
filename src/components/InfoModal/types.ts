import { ImageRequireSource, ModalProps } from "react-native";

export interface PROPSMODALINFO extends ModalProps {
    image?: ImageRequireSource
    title: string,
    text: string,
    textButton?: string,
    onPress: () => void
    textSecondButton?: string,
    onPressSecondButton?: ()=> void
}
