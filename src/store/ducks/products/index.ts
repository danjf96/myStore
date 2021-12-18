import { STATESTORE } from "./types";


//REDUCERS
const INITIAL_STATE: STATESTORE = {
    loading: false
}

//STATE CASES
const STATE = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}

//Actions Creators

export default STATE