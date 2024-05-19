import React, { useState } from 'react'
import Layout from './layouts/layout'
import Landing from './components/landing/index'
import Library from './components/library'
import Details, {gameLoader} from './components/details'
import NotFound from './components/NotFound'
import AddGame from './components/addGame'

import { BrowserRouter as Router, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const apiUrl = process.env.NODE_ENV === 'production' ? 'https://json-server-gilt-psi.vercel.app/api/games' : '/api/games';


const App = () => {
  const addGame = async (newGame) => {
    const res = await fetch('https://json-server-gilt-psi.vercel.app/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGame)
    })
    return
  }

  const deleteGame = async (id) => {
    const res = await fetch(`https://json-server-gilt-psi.vercel.app/games/${id}`, {
      method: 'DELETE'
    })
    return
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Landing/>}/>
      <Route path='/library' element={<Library/>}/>
      <Route path='/library/:id' element={<Details deleteGame={deleteGame}/>} loader={gameLoader}/>
      <Route path='/add-game' element={<AddGame addGameSubmit={addGame}/>} />
      <Route path='*' element={<NotFound/>}/>
    </Route>)
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App