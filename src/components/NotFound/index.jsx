import React from 'react'

import ErrorIcon from '@mui/icons-material/Error'
import HomeIcon from '@mui/icons-material/Home'

const NotFound = () => {
  return (
    <div className='bg-black pt-[70px] w-full min-h-screen flex items-center justify-center'>
        <ErrorIcon className='text-white mr-5' fontSize='large'/>
        <h1 className='text-white text-4xl text-center'>404 Not Found</h1>
    </div>
  )
}

export default NotFound