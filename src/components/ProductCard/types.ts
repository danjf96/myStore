import { PRODUCTSTATE } from "../../store/ducks/products/types";

export interface ProductsCardProps extends PRODUCTSTATE {
    number?: number,
    quantity?: boolean,
    onPressQuantity?: (type: 'increase' | 'decrease') => void,
    testId?: string
}