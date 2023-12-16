import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="flex flex-col mt-36">
        <h1
          className="text-[250px] text-lime-500 cursor-default flex flex-col items-center w-full tracking-wider leading-none"
          id="hero">
          Lumi
        </h1>
        <p className="text-white text-6xl text-center leading-snug font-">
          Illuminate Moments.
        </p>
        <div className='flex justify-center pt-4'>
          <button className="text-white p-3 border-2 border-lime-500 w-36 h-12 rounded-2xl flex justify-center hover:text-lime-500 hover:border-white font-bold">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full h-4 z-50 pointer-events-none">
        <img src="./Images/Ellipse2.svg" alt="" />
      </div>
    </>
  );
}

export default Hero