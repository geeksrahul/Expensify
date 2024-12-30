import { faSun, faMoon,  faCloudMoon,  faLightbulb,  faMoneyCheckDollar as logo, faCircleUser as user} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
    const [theme, setTheme] = useState("dark");
  return (
    <header
        className='bg-white flex h-16 justify-between items-center px-10 text-black dark:bg-gray-900 dark:text-white'
    >   
        <h2 className='font-medium flex items-center justify-center gap-1'>
            <FontAwesomeIcon icon={logo} className='text-3xl text-orange-500' />
            <span className='text-2xl'>
                Expensify
            </span>
        </h2>
        <nav>
            <ul className='flex gap-5 items-center justify-between font-semibold'>
                <li>
                    <NavLink to="/" className={({isActive})=>`${isActive ? 'text-orange-600' : 'text-black dark:text-white'}`}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive})=>`${isActive ? 'text-orange-600' : 'text-black dark:text-white'}`}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/expense" className={({isActive})=>`${isActive ? 'text-orange-600' : 'text-black dark:text-white'}`}>
                        Expenses
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/categories" className={({isActive})=>`${isActive ? 'text-orange-500' : 'text-black dark:text-white'}`}>
                        Categories
                    </NavLink>
                </li>
            </ul>
        </nav>
        <div className='w-8 h-8 bg-slate-100 rounded-2xl flex justify-center items-center text-black dark:bg-gray-500 dark:text-yellow-300 '>
            {theme === "dark" ?  <FontAwesomeIcon icon={faSun}
                onClick={()=>{
                    setTheme("light");
                    document.querySelector("html").classList.remove("dark")
                    document.querySelector("html").classList.add("light")
                }}
                /> : <FontAwesomeIcon icon={faMoon}
                onClick={()=>{
                    setTheme("dark")
                    console.log("dark")
                    document.querySelector("html").classList.remove("light");
                    document.querySelector("html").classList.add("dark");
                }}
            /> }
        </div>
    </header>
  )
}

export default Header