import React, { useState } from 'react'
import Nav from './components/navbar/index'
import Landing from './components/landing/index'
import Footer from './components/footer/index'

const App = () => {
  const [hover, setHover] = useState(false);
  return (
    <>
    <Nav/>
    <Landing/>
    <Footer/>
    </>
  )
}

export default App