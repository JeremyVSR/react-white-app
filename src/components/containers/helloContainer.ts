import { connect } from "react-redux";
import Hello from "../presentation/Hello";
import { Click1, Click2, Click3 } from "../../actions/clickAction";

const mapStateToProps = (state: any) => ({
    helloMessage: state.helloMessage
});

const mapDispatchToProps = (dispatch: any) =>
    ({
        onClick1(test:string) {
            dispatch({...Click1, test})
        },
        onClick2() {
            dispatch(Click2)
        },
        onClick3() {
            dispatch(Click3)
        }
    })

export const HelloContainer = connect(mapStateToProps, mapDispatchToProps)(Hello) 