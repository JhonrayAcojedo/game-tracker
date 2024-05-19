import React from 'react'
import { useParams, useLoaderData} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Details = ({deleteGame}) => {
    const { id } = useParams()
    const game = useLoaderData()
    const navigate = useNavigate()

    const deleteAndRedirect = async (id) => {
        await deleteGame(id)
        navigate('/library')
    }
  return (
    <div className='bg-black pt-[70px] w-full min-h-screen'>
        <img src={game.DetailsImage} alt={game.Title} className='w-full h-[80vh] object-cover'/>
        <h1 className='text-white text-4xl text-center pt-10 font-bold mb-5'>{game.Title}</h1>
        <div className='flex flex-col gap-y-10 justify-center'>
            <div className='flex flex-wrap px-10 gap-y-10'>
                <div className='w-1/2 flex flex-col items-center '>
                    <h2 className='text-white text-2xl font-bold'>Developer</h2>
                    <p className='text-white'>{game.Developer}</p>
                </div>
                <div className='w-1/2 flex flex-col items-center'>
                    <h2 className='text-white text-2xl font-bold'>Genre</h2>
                    <p className='text-white'>{game.Genre}</p>
                </div>
                <div className='w-1/2 flex flex-col items-center'>
                    <h2 className='text-white text-2xl font-bold'>Release Date</h2>
                    <p className='text-white'>{game.ReleaseDate}</p>
                </div>
                <div className='w-1/2 flex flex-col items-center px-4'>
                    <h2 className='text-white text-2xl font-bold'>Platform</h2>
                    <p className='text-white text-center'>{game.Platform.join(', ')}</p>
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <div className='text-center min-h-7 bg-neutral-700 rounded-xl w-1/2 flex flex-col px-10 py-4 gap-y-2'>
                    <h2 className='text-white text-2xl font-bold'>Description</h2>
                    <p className='text-white text-center'>{game.Description}</p>
                </div>
            </div>
        </div>

        <div className='flex justify-center mt-5'>
        <button className=' bg-red-800 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full w-1/2 focus:outline-none focus:shadow-outline min-w-[200px]'
            onClick={() => deleteAndRedirect(id)}
        >
                    Delete Game
        </button>
        </div>

    </div>
  )
}

const gameLoader = async ({params}) => {
    try{
        const result = await fetch(`https://json-server-gilt-psi.vercel.app/games/${params.id}`)
        const data = await result.json()
        return data
    }catch(error){
        console.error(error)
    }
}
export { Details as default, gameLoader}