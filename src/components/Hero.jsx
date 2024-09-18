import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4'>
        <p className='text-1xl sm:text-2xl md:text-2xl lg:text-3xl'>Push Your Limits</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Achieve <span className='text-red-400'>Strength</span></h1>
        <p className='text-sm md:text-base font-light'>Welcome to the workout generator. This platform provides customized workout plans based on your fitness goals. It offers a straightforward way to create routines tailored to your needs, helping you achieve your objectives efficiently.</p>
      <Button func={() =>{
        window.location.href = '#generate'}} text={"Get Started"}></Button>
    </div>
  )
}
