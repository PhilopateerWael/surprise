import React from 'react'
import cat from "../public/laughing-cat.jpg"
const Home = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center absolute z-0 top-0'>
            <img className='w-screen h-screen' src={cat} alt=""/>
        </div>
    )
}

export default Home