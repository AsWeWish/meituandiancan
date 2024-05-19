
import foodsReducer from "./modules/takeaway";

import {configureStore} from "@reduxjs/toolkit";


let store = configureStore({
    reducer: {
        foods: foodsReducer
    }
});

export default store;