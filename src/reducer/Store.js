import { createStore } from "redux";
import rootReducer from ".";

const mystore = createStore(rootReducer);

export default mystore;