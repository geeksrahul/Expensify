import React from 'react'
import Tracking from "../assets/tracking.png"
import Category from "../assets/category.png"
import Hero from "../assets/hero.png"
function About() {
  return (
    <div className='min-h-screen p-7 px-10 flex flex-col gap-5 dark:bg-gray-800 dark:text-white'>
        <h2 className='text-3xl font-medium'> About Expensify</h2>
        <p>
        Our Expense Tracker app is designed to help you take control of your finances effortlessly. Whether you're managing monthly bills or tracking daily spending, our easy to use features will keep you on top of your money and help you make informed decisions. Here’s what you can do with the app:
        </p>
        <div className='flex gap-7'>
            <div className='bg-white p-5 rounded-md flex flex-col w-72 min-h-1 items-center dark:bg-gray-950'>
                <img src={Hero} alt="" className='w-60 aspect-square' />
                <h3 className='font-semibold text-lg'>Intuitive Expense Tracking</h3>
                <p>
                Easily add, update and remove your expenses with just few steps
                </p>
            </div>
            <div className='bg-white p-2 rounded-md flex flex-col w-72 items-center dark:bg-gray-950'>
                <img src={Category} alt="" className='w-60 aspect-square ' />
                <h3 className='font-semibold text-lg'>Expense Categorization</h3>
                <p>
                Organize your expenses into categories like Food, Entertainment, Transportation, and more for easy insights
                </p>
            </div>
            <div className='bg-white p-2 rounded-md flex flex-col w-80 items-center dark:bg-gray-950'>
                <img src={Tracking} alt="" className='w-60 aspect-square' />
                <h3 className='font-semibold text-lg'>Intuitive Expense Tracking</h3>
                <p>
                Easily add and categorize your daily expenses with just a few taps.
                </p>
            </div>
            <div className='bg-white p-2 rounded-md flex flex-col w-72 items-center dark:bg-gray-950'>
                <img src={Category} alt="" className='w-60 aspect-square ' />
                <h3 className='font-semibold text-lg'>Expense Categorization</h3>
                <p>
                Organize your expenses into categories like Food, Entertainment, Transportation, and more for easy insights
                </p>
            </div>
        </div>

    </div>
  )
}

export default About