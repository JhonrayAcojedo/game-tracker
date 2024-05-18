import React from 'react'

import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Nav = () => {
  return (
    <div className="float-left shadow fixed text-white pl-25 pr-50 bg-black px-8 border-b-4 border-white py-2" style={{width: '100%', height: '70px'}}>
      <div className="lg:block xl:block 2xl:block">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <img src="/vite.svg" alt="Vite Logo" className="w-50 h-50" />
            <h1 className="text-2xl font-bold ml-5">Game Tracker</h1>
            <SportsEsportsIcon className="ml-5" fontSize='large'/>
          </div>

          <div className="flex items-center flex-col group">
            <HomeIcon className="text-white text-2xl group-hover:text-sky-400"/>
            <a href="#" className="text-white text-xl font-semibold group-hover:text-sky-400">Home</a>
          </div>

          <div className="flex items-center flex-col group">
            <ListAltIcon className="text-white text-2xl group-hover:text-sky-400"/>
            <a href="/library" className="text-lg  font-semibold group-hover:text-sky-400">Library</a>
          </div>

          <div className="flex items-center flex-col group">
            <FavoriteIcon className="text-white text-2xl group-hover:text-sky-400"/>
            <a href="/favorites" className="text-lg font-semibold group-hover:text-sky-400">Favorites</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav