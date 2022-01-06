import api, { errorHandling } from "../../../services/api";
import { STATESTORE, Types } from "./types";


//REDUCERS
const INITIAL_STATE: STATESTORE = {
    loading: false,
    listProducts: []
}

//STATE CASES
const STATE = (state = INITIAL_STATE, action: any):STATESTORE => {
    switch (action.type) {
        case Types.LOAD:
            return { ...state, loading: action.loading }
        case Types.CHANGE:
            return { ...state, ...action.payload }
        case Types.CLEAN:
            return INITIAL_STATE
        default:
            return state;
    }
}

//Actions Creators
export const getProducts = (name:string = '', callback?: (res:boolean) => void) => {
    return async (dispatch: (arg0:any) => any) => {
        dispatch({ type: Types.LOAD, loading: true })
        try {
            let params = new URLSearchParams()
            params.append('name', name)

            const { data } = await api.get('product', { params })
            dispatch({ type: Types.CHANGE, payload:  { 
                loading: false, 
                listProducts:  data
            }})
            callback && callback(true)
        } catch (e) {
            dispatch({ type: Types.LOAD, loading: false })
            errorHandling(e)
            callback && callback(false)
        }
    }

}
export default STATE