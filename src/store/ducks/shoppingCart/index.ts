import api, { errorHandling } from "../../../services/api";
import { STATESTORE, Types } from "./types";


//REDUCERS
const INITIAL_STATE: STATESTORE = {
    loading: false,
    cart: [],
    totalPrice: 0
}

//STATE CASES
const STATE = (state = INITIAL_STATE, action: any):STATESTORE => {
    switch (action.type) {
        case Types.LOAD:
            return { ...state, loading: action.loading }
        case Types.CHANGE:
            return { ...state, ...action.payload }
        case Types.CHANGE_VALUE:
            return { ...state, [action.key]: action.value }
        case Types.CLEAN:
        case Types.CLEAN_CART:
            return { ...INITIAL_STATE, cart: []}
        default:
            return state;
    }
}

//Actions Creators
export const changeShoppingCart = (payload:any) => {
    return async (dispatch: (arg0:any) => any) => {
        dispatch({ type: Types.CHANGE, payload  })
    }
}

export const changeShoppingCartValue = (key:string, value:any) => {
    return async (dispatch: (arg0:any) => any) => {
        dispatch({ type: Types.CHANGE_VALUE, key, value  })
    }
}

export const cleanCart = () => {
    return async (dispatch: (arg0:any) => any) => {
        dispatch({ type: 'CLEAN'  })
    }
}
export default STATE