import React from 'react'
import Hero from "../assets/hero.png"
import {ReactTyped} from "react-typed"
import {Link } from 'react-router-dom'
function Home() {
  return (
    <div className='min-h-screen w-full p-5 flex bg-slate-300 dark:bg-gray-800 dark:text-lime-50'>
      <div className='w-1/2 flex justify-center items-center'>
        <img src={Hero} alt="" className='w-96'/>
      </div>
      {/* right */}
      <div className='w-1/2 flex flex-col py-40 px-16 gap-3'>
          <h2 className='text-4xl font-bold'> Manage <span className='text-orange-600'>
              <ReactTyped 
                strings={["Income", "Expenses", "Savings","Everything..."]}
                typeSpeed={50}
              /> 
            </span>
          </h2>
          <p className='w-full text-lg font-medium'>Manage your money smarter with our expense tracker. Track expenses, budget better, and take control of your finances with ease!</p>
          <div className='w-full flex gap-2'>
            <Link to="/" className='bg-orange-700 text-gray-100 p-2 px-5 font-medium rounded-sm hover:bg-orange-600'>
              Start Now
            </Link>
            <Link to="/about" className='bg-transparent border-black border-2 p-2 px-5 font-medium rounded-sm light:hover:bg-black hover:text-white dark:border-white hover:bg-white hover:text-black'>
              Know More...
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Home