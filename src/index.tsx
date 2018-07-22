import * as React from "react";
import { render } from "react-dom";
import App from "./app";
import { HashRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import { createStore, applyMiddleware, combineReducers } from "redux";
import { clickReducer } from "./reducers/clickReducer";
import { titi } from "./saga/sagas";
import createSagaMiddleware from "redux-saga";
import { sagaReducer } from "./reducers/sagaReducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({clickReducer, sagaReducer}), { helloMessage: "test" }, applyMiddleware(sagaMiddleware));
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("example")
); 

store.subscribe(() => console.log(store.getState()))
sagaMiddleware.run(titi);