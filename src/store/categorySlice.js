import { createSlice } from "@reduxjs/toolkit";

const getCategoryFromLocalStorage = () => {
    try {
        const category = window.localStorage.getItem("categories");
        return category ? JSON.parse(category) : []; // Parse if exists, fallback to an empty array
    } catch (error) {
        console.error("Error parsing category from localStorage:", error);
        return []; // Fallback to an empty array on error
    }
};

const initialState = {
    categories : getCategoryFromLocalStorage()
}

const categorySlice = createSlice({
    name : "category",
    initialState,
    reducers : {
        addCategory : (state, action) => {
            state.categories = [...state.categories, action.payload.category];
            window.localStorage.setItem("categories", JSON.stringify(state.categories));
        },
        deleteCategory : (state, action) => {
            state.categories = state.categories.filter(category => category !== action.payload.category)
            window.localStorage.setItem("categories", JSON.stringify(state.categories));
        }
    }
})

export const {addCategory, deleteCategory} = categorySlice.actions

export default categorySlice.reducer