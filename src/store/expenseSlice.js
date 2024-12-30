import { createSlice, nanoid } from "@reduxjs/toolkit";

const getExpensesFromLocalStorage = () => {
    try {
        const expenses = window.localStorage.getItem("expenses");
        return expenses ? JSON.parse(expenses) : []; // Parse if exists, fallback to an empty array
    } catch (error) {
        console.error("Error parsing expenses from localStorage:", error);
        return []; // Fallback to an empty array on error
    }
};

const initialState = {
    expenses :  getExpensesFromLocalStorage()
}


const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        insertExpense: (state, action) => {
            state.expenses = [
                ...state.expenses,
                {
                    id: nanoid(),
                    ...action.payload,
                },
            ];
            window.localStorage.setItem("expenses", JSON.stringify(state.expenses)); // Save to localStorage
        },
        deleteExpense: (state, action) => {
            console.log("Deleted")
            state.expenses = state.expenses.filter(exp => exp.id !== action.payload.id);
            window.localStorage.setItem("expenses", JSON.stringify(state.expenses)); // Save to localStorage
        },
        updateExpense: (state, action) => {
            state.expenses = state.expenses.map((exp) =>
                exp.id === action.payload.id
                    ? {
                          ...exp, // Spread the existing expense properties
                          amount: action.payload.amount,
                          date: action.payload.date,
                          category: action.payload.category,
                          note: action.payload.note,
                      }
                    : exp // Leave other expenses unchanged
            );
            window.localStorage.setItem("expenses", JSON.stringify(state.expenses)); // Save to localStorage
            console.log("updated successfully")
        },
    },
});

export const { insertExpense, deleteExpense, updateExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
