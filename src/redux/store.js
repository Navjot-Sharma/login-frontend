import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from ".";

export default createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        createLogger()
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
