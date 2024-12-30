import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expenseSlice.js"
import categoryReducer from "./categorySlice.js"

const store = configureStore({
    reducer:{
        expense : expenseReducer,
        category : categoryReducer,
    }
});


export default store;