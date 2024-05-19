import React from 'react'
import Card from '../card'

import data from '../../../games.json'
const Library = () => {
  return (
    <div className='bg-black pt-[70px] w-full min-h-screen'>
      <h1 className='text-white text-4xl text-center pt-10'>Welcome to your Game Library</h1>
        <p className='text-white text-lg text-center pt-5'>Browse to your heart's content</p>
        <br/>

        <div className='flex justify-between px-10'>
          {data.games.map((game, index) => (
              <Card key={index} game={game}/>
          ))}
        </div>

    </div>
  )
}

export default Library