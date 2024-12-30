import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function Expense() {
  return (
    <div className='h-screen flex justify-between items-center'>
        <div className="left w-1/5 flex flex-col items-start justify-center ps-20 k h-screen bg-gray-300 dark:bg-gray-800 dark:text-lime-100">
            <h2 className="py-3 font-bold text-2xl pl-2 dark:text-yellow-500">
                Expenses 
            </h2>
            <ul className='flex flex-col text-xl font-semibold'>
                <li className='w-full  py-3 px-3'>
                    <NavLink to="add" className={({isActive})=>`${isActive ? 'text-orange-600' : ''}`}>
                        Add
                    </NavLink>
                </li> 
                <li className='w-full py-3 px-3'>
                    <NavLink to="view" className={({isActive})=>`${isActive ? 'text-orange-600' : ''}`}>
                        View
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className="right w-4/5 max-h-screen ">
            <Outlet />
        </div>
    </div>
  )
}

export default Expense