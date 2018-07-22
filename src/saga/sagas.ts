import { call, put, fork, actionChannel, take, all } from "redux-saga/effects";
import { delay, takeEvery, takeLatest, buffers, channel } from "redux-saga";
import { Click1, Click2 } from "../actions/clickAction";

function* testFetch(channel: any) {
    yield take(channel)
    console.log("start fetching...")
    yield put({type: "USER_FETCH_SUCCEEDED", value: "test"});
    console.log("finish fetching...")
}

function* click1(o: any){
    console.log(o)
     yield call(() => console.log("click 1 ok")) 
}

function* click2() {
    yield call(() => console.log("click 2 ok"))
}

function* test() {
    yield takeLatest(Click1.type, click1)
    yield takeLatest(Click2.type, click2)
}

export function* titi() {
   yield test()

}