export interface STATESTORE {
    loading: boolean,
    listProducts: PRODUCTSTATE[]
}

//TYPES ACTIONS
export const Types = {
    CLEAN: 'CLEAN',
    CHANGE: 'CHANGE_PRODUCT',
    LOAD: 'LOAD_PRODUCT'
}

export interface PRODUCTSTATE {
    id: string,
    createdAt: string,
    name: string,
    price: number,
    image: string,
    stock: number
}
