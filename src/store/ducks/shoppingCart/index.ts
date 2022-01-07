import api, { errorHandling } from "../../../services/api";
import { STATESTORE, Types } from "./types";


//REDUCERS
const INITIAL_STATE: STATESTORE = {
    loading: false,
    cart: []
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
            return INITIAL_STATE
        default:
            return state;
    }
}

//Actions Creators
export const changeShoppingCart = (payload:{}) => {
    return async (dispatch: (arg0:any) => any) => {
        dispatch({ type: Types.CHANGE, payload  })
    }
}

export const changeShoppingCartValue = (key:string, value:any) => {
    return async (dispatch: (arg0:any) => any) => {
        dispatch({ type: Types.CHANGE, key, value  })
    }
}
export default STATE