import { combineReducers } from "redux";
import { overReducer } from "./overReducer";
import { modeReducer } from "./modeReducer";

const rootReducer = combineReducers({
    overview: overReducer,
    mode: modeReducer,
});

export default rootReducer;
