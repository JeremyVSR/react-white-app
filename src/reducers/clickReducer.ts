import { Click1, Click2, Click3 } from "../actions/clickAction";

export const clickReducer = (state = { helloMessage: "test" }, action: { type: string }) => {
    switch (action) {
        case Click1:
            return { ...state, helloMessage: "display button 1" }
        case Click2:
            return { ...state, helloMessage: "display button 2" }
        case Click3:
            return { ...state, helloMessage: "display button 3" }
        default:
            return state
    }
}