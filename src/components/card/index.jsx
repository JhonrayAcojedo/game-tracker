import React from 'react'

const Card = ({game, onClick}) => {
  return (
    <div onClick={onClick} className='relative bg-white hover:border-white hover:border-5 hover:p-1 cursor-pointer min-w-[200px] min-h-[100px]' style={{ height: '250px', width: '200px', overflow: 'hidden' }}>
      <img src={game.Image} alt={game.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div className="absolute inset-0 bg-gray-800 opacity-0 bg-opacity-0 hover:opacity-100 hover:bg-opacity-50 transition-opacity duration-500 flex items-center justify-center">
            <span className='text-white text-xl font-semibold text-center px-1 select-none'>{game.Title}</span>
      </div>
    </div>
  );
};

export default Card