import React from 'react'
import gojo from "../public/theGoat.webp"
const Loader = () => {

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className="flex w-screen h-svh sm:h-[300px] justify-center items-center overflow-hidden z-10">
        <div className='w-full h-full flex loader-parent justify-center items-center z-10'>
          <div className='bg-[#c1c1c1] h-full w-full'></div>
          <div className='bg-[#c1c100] h-full w-full'></div>
          <div className='bg-[#00c1c1] h-full w-full'></div>
          <div className='bg-[#00c100] h-full w-full'></div>
          <div className='bg-[#c100c1] h-full w-full'></div>
          <div className='bg-[#c10000] h-full w-full'></div>
          <div className='bg-[#0000c1] h-full w-full'></div>
        </div>
        <img src={gojo} alt="" className='absolute w-[100%] opacity-0 thegoat' />
      </div>
    </div>
  )
}

export default Loader