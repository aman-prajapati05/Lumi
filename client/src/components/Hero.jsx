import React from 'react'

import ImageDropInput from './ImageInput'

const Hero = () => {

  const handleGetStarted = () => {
  
    const imageDropInputSection = document.getElementById('imageDropInputSection');
    if (imageDropInputSection) {
      imageDropInputSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="flex flex-col md:mt-[-3rem] px-8 w-screen justify-center items-center h-screen">
        <h1
          className="text-[7rem] md:text-[14rem]  text-lime-500 flex flex-col items-center w-full tracking-wider leading-none "
          id="hero">
          Lumi
        </h1>
        <p className="text-white md:text-6xl text-3xl text-center leading-snug font-">
          Illuminate Moments.
        </p>
        <div className="flex justify-center pt-4">
          <button
            className="text-white p-3 border-2   bg-lime-500 w-36 h-12 rounded-2xl flex justify-center hover:bg-transparent hover:border-white font-bold"
            onClick={handleGetStarted}
            >
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full h-4 z-50 pointer-events-none ">
        <img src="./Images/Ellipse2.svg" alt="" />
      </div>
      <div id='imageDropInputSection'>
      <ImageDropInput/>
      </div>
    </>
  );
}

export default Hero