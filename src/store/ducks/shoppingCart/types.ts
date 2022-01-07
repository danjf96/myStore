export interface STATESTORE {
    loading: boolean,
    cart: CARTSTATE[]
}

//TYPES ACTIONS
export const Types = {
    CLEAN: 'CLEAN',
    CLEAN_SHOPPINGCART: 'CLEAN_SHOPPINGCART',
    CHANGE: 'CHANGE_SHOPPINGCART',
    CHANGE_VALUE: 'CHANGE_SHOPPINGCART',
    LOAD: 'LOAD_SHOPPINGCART'
}

export interface CARTSTATE {
    id: string,
    createdAt: string,
    name: string,
    price: number,
    image: string,
    stock: number,
    quantity: number
}