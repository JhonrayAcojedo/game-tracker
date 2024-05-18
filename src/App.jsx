import React, { useState } from 'react'
import Layout from './layouts/layout'
import Landing from './components/landing/index'

import { BrowserRouter as Router, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Landing/>}/>
    </Route>)
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App