import React from 'react'
//import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
const AddGame = ( {addGameSubmit}) => {
    const navigate = useNavigate();
    const [Title, setTitle] = useState('');
    const [Genre, setGenre] = useState('Action');
    const [Developer, setDeveloper] = useState('');
    const [ReleaseDate, setReleaseDate] = useState('');
    const [Platform, setPlatform] = useState([]);
    const [Description, setDescription] = useState('');
    const [Image, setImage] = useState('');
    const [DetailsImage, setDetailsImage] = useState('');


    const handlePlatformChange = (isChecked, Platform) => {
        if (isChecked) {
            setPlatform(prevPlatforms => [...prevPlatforms, Platform]);
        } else {
            setPlatform(prevPlatforms => prevPlatforms.filter(item => item !== Platform));
        }
    };

    const submitForm = (e) => {
        e.preventDefault();

        const newGame = {
          Title,
          Genre,
          Developer,
          ReleaseDate,
          Platform,
          Description,
          Image,
          DetailsImage
        };

        console.log(newGame);
        addGameSubmit(newGame);

        //toast.success('Job Added Successfully');

        return navigate('/library');
    };

     return (
        <section className='bg-black'>
        <div className='container m-auto max-w-2xl py-24'>
            <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
            <form onSubmit={submitForm}>
                <h2 className='text-3xl text-center font-semibold mb-6'>Add Game</h2>

                <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>
                    Game Name
                </label>
                <input
                    title='text'
                    id='title'
                    name='title'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='eg. Valorant'
                    required
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                </div>

                <div className='mb-4'>
                    <label
                        htmlFor='type'
                        className='block text-gray-700 font-bold mb-2'
                    >
                        Genre
                    </label>
                    <select
                        id='Genre'
                        name='Genre'
                        className='border rounded w-full py-2 px-3'
                        required
                        value={Genre}
                        onChange={(e) => setGenre(e.target.value)}
                    >
                        <option value='Action'>Action</option>
                        <option value='Action-Adventure'>Action-Adventure</option>
                        <option value='Adventure'>Adventure</option>
                        <option value='Puzzle'>Puzzle</option>
                        <option value='Role-playing (RPG)'>Role-playing (RPG)</option>
                        <option value='Simulation'>Simulation</option>
                        <option value='Massively Multiplayer Online (MMO)'>Massively Multiplayer Online (MMO)</option>
                        <option value='Platformer'>Platformer</option>
                        <option value='Shooter'>Shooter</option>
                    </select>
                </div>

                <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>
                    Developer
                </label>
                <input
                    title='text'
                    id='Developer'
                    name='Developer'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='eg. CD Projekt Red'
                    required
                    value={Developer}
                    onChange={(e) => setDeveloper(e.target.value)}
                />
                </div>

                <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>
                    Release Date
                </label>
                <input
                    title='text'
                    id='ReleaseDate'
                    name='ReleaseDate'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='eg. May 15, 2020'
                    required
                    value={ReleaseDate}
                    onChange={(e) => setReleaseDate(e.target.value)}
                />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2'>
                        Platform
                    </label>
                    {['Windows', 'macOS', 'Linux', 'Android', 'iOS', 'Xbox 360', 'PlayStation 3', 'PlayStation 4', 'Xbox One', 'PlayStation Vita', 'Universal Windows Platform', 'Wii U', 'Nintendo Switch', 'New Nintendo 3DS', 'PlayStation VR'].map((Platform) => (
                        <div key={Platform}>
                        <input
                            type='checkbox'
                            id={Platform}
                            name={Platform}
                            value={Platform}
                            onChange={(e) => handlePlatformChange(e.target.checked, Platform)}
                        />
                        <label htmlFor={Platform} className='ml-2'>
                            {Platform}
                        </label>
                        </div>
                    ))}
                </div>

                <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>
                    Description
                </label>
                <input
                    title='text'
                    id='Description'
                    name='Description'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='Provide a brief Description of the game'
                    required
                    value={Description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                </div>

                <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>
                    Image Link
                </label>
                <input
                    title='text'
                    id='Image'
                    name='Image'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='Provide a link for the display Image of the game'
                    required
                    value={Image}
                    onChange={(e) => setImage(e.target.value)}
                />
                </div>

                <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>
                    Game Details Image Link
                </label>
                <input
                    title='text'
                    id='detailsImage'
                    name='detailsImage'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='Provide a link for the Image for the details page Image of the game'
                    required
                    value={DetailsImage}
                    onChange={(e) => setDetailsImage(e.target.value)}
                />
                </div>

                <div>
                <button
                    className='bg-black hover:bg-sky-400 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                    title='submit'
                >
                    Add Game
                </button>
                </div>
            </form>
            </div>
        </div>
        </section>
    )
}

export default AddGame