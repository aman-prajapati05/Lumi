import React from 'react'
const Hero = () => {
  return (
    <>
      <div className="flex flex-col mt-36">
        <h1
          className="text-[250px] text-lime-500 cursor-pointer flex flex-col items-center w-full tracking-wider leading-none"
          id="hero">
          Lumi
        </h1>
        <p className="text-white text-6xl text-center leading-snug">
          Illuminate Moments.
        </p>
      </div>
      {/* <div className='w-full h-4 z-50'>
        <img src="./Images/Ellipse2.svg" alt="" />
      </div> */}
    </>
  );
}

export default Hero