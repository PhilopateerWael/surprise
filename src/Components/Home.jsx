import React from 'react'
import cat from "../public/laughing-cat.png"
const Home = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center absolute z-0 top-0'>
            <img className='w-screen h-screen' src={cat} alt=""/>
            <h1 className='w-screen absolute text-center text-5xl te py-4'>GET PURPULED NIGGA</h1>
        </div>
    )
}

export default Home