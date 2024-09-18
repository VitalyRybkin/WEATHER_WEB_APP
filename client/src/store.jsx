import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./reducers/index.jsx";

const store = configureStore({
    reducer: rootReducer
})
export default store;