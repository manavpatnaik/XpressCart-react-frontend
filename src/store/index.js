import { createStore } from "redux";
import rootReducer from "../reducers";

const store = createStore(rootReducer);
const red = store();

export default store;
