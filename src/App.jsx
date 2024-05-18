import React, { useState } from 'react'
import Nav from './components/navbar/index'
import MEImage from './images/Mirrors-edge.jpg'
import Footer from './components/footer/footer'

const App = () => {
  const [hover, setHover] = useState(false);
  return (
    <>
    <Nav></Nav>
    <div className='bg-black pt-[70px] w-full min-h-screen'>
      <h1 className='text-white text-4xl text-center pt-10'>Welcome to Game Tracker</h1>
      <div className="relative mx-auto my-10">
          <img src={MEImage} alt="Mirrors edge image" className="w-full transition duration-500 ease-in-out transform hover:scale-105" />
          <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-50 transition-opacity duration-500 flex flex-col items-center justify-center space-y-4">
            <span className='text-white text-xl font-semibold'>Mirrors Edge Catalyst ™</span>
            <button className="text-white px-4 py-2 rounded bg-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Learn More
            </button>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default App