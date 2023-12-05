import { combineReducers } from "redux";
import Cartreducer from "./CartReducer";

const rootReducer = combineReducers({
    CartR :Cartreducer,
})
export default rootReducer;