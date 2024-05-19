import React from 'react'
import Card from '../card'

import { useNavigate } from 'react-router-dom'

import data from '../../../games.json'
const Library = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-black pt-[70px] w-full min-h-screen'>
      <h1 className='text-white text-4xl text-center pt-10'>Welcome to your Game Library</h1>
        <p className='text-white text-lg text-center pt-5'>Browse to your heart's content</p>
        <br/>

        <div className='flex columns-4 justify-between px-10'>
          {data.games.map((game, index) => (
              <Card key={index} game={game} onClick={() => {navigate(`/library/${index}`)}}/>
          ))}
        </div>
    </div>
  )
}

export default Library