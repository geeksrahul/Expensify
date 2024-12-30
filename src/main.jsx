import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from "./store/store.js"

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Routes,Route } from 'react-router-dom'
import {Home, ExpenseForm, ViewExpense, About, Categories, Expense} from "./pages/index.js"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />}/> 
      <Route path="/home" element={<Home />}/> 
      <Route path="/about" element={<About />}/> 
      <Route path="/expense" element={<Expense />}> 
        <Route path="/expense/add" element={<ExpenseForm />}/> 
        <Route path="/expense/update/:id" element={<ExpenseForm />}/> 
        <Route path="/expense/view" element={<ViewExpense />}/> 
      </Route>
      <Route path="/categories" element={<Categories />}/> 
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
