import React from 'react'
import { Link } from 'react-router-dom'

import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import HomeIcon from '@mui/icons-material/Home'
import ListAltIcon from '@mui/icons-material/ListAlt'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Nav = () => {
  return (
    <div className="fixed text-white sm:pl-25 sm:pr-50 bg-black px-8 border-b-4 border-white py-2 z-10 w-full h-30 sm:h-20">
      <div className="block sm:flex items-center justify-between h-full gap-y-6">
        <div className="flex items-center justify-center">
          <img src="/vite.svg" alt="Vite Logo" className="w-12 h-12 sm:w-20 sm:h-20" />
          <Link to='/' className="flex">
            <h1 className="text-xl sm:text-2xl font-bold ml-5">Game Tracker</h1>
            <SportsEsportsIcon className="ml-5" fontSize='large'/>
          </Link>
        </div>

        <div className="flex justify-center sm:justify-end w-full sm:w-auto gap-x-10">
          <Link to="/" className="flex justify-center min-w-15 items-center flex-col group">
            <HomeIcon className="text-white text-2xl group-hover:text-sky-400"/>
            <span  className="text-white text-xl font-semibold group-hover:text-sky-400">Home</span>
          </Link>

          <Link to="/library" className="flex justify-center min-w-15 items-center flex-col group">
            <ListAltIcon className="text-white  text-2xl  group-hover:text-sky-400"/>
            <span className="text-lg  font-semibold group-hover:text-sky-400">Library</span>
          </Link>

          <Link to="/add-game" className="flex justify-center min-w-15 items-center flex-col group">
            <AddCircleIcon className="text-white text-2xl group-hover:text-sky-400"/>
            <span href="/add-game" className="text-lg font-semibold group-hover:text-sky-400">Add Game</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav