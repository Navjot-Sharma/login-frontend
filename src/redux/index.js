import { combineReducers } from "redux";
import authReducer from './auth/auth.reducers';
import homeReducers from "./home/home.reducers";

export default combineReducers({
    auth: authReducer,
    home: homeReducers
});
