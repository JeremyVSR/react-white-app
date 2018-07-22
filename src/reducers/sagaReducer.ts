import { Fetch } from "../actions/fetchAction";


export const sagaReducer = (state: any = {}, action: { type: string }) => {
    switch (action) {
        case Fetch:
            return { ...state, helloMessage: "fetch user" }
        default:
            return state
    }
}