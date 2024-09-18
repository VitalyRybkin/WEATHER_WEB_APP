import {combineReducers} from "@reduxjs/toolkit";
import unitsReducer from "./UnitsReducer.jsx";

const rootReducer = combineReducers({
    unitsSLice: unitsReducer,
})

export default rootReducer;