import { useState } from 'react'
import { Header,Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='bg-gray-300 h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
