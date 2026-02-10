import React, { useState, useEffect } from 'react';
import Card from "./images/Card.json"
import Button from "./Button.jsx"
import Lottie from "lottie-react"


const App = () => {

  return ( // JSX
    <>
      <div className="min-h-dvh pl-10 pr-10 flex flex-col bg-linear-to-br from-[#142040] to-[#0a1020] font-satoshi text-[#E2E8F0] ">
        <header className="flex justify-between items-center p-3 border-b mb-11">
          <h1 className=" text-2xl">Leo Beatson</h1>
          <ul className="flex gap-3">
            <li className="nav-link">About</li>
            <li className="nav-link">Skills</li>
            <li className="nav-link">Projects</li>
            <li className="nav-link">Resume</li>
            <li className="nav-link">Contact</li>
          </ul>
        </header>
        <main className='flex sm:flex-col md:flex-row lg:flex-row lg:h-100 relative p-3 gap-0 md:gap-10 items-center'>
          <ul className='flex flex-col gap-2 mb-2 md:w-[80%] lg:w-[60%] '>
            <li className='font-bold'>Custom Designs, Custom Coded</li>
            <li className='font-bold text-5xl'>Small Business Web Designer</li>
            <li className=''>No page builders or WordPress. We offer 100% hand-coded websites with superior results starting at $175/mo as well as Google Ads and SEO services.</li>
          </ul>
          {/* <img src="..\src\images\undraw_starry-window_yiga.svg" alt="" className='h-124' /> */}
          <div className='lg:h[80%] md:-mt-20 lg:-mt-7' >
            <Lottie className="h-full w-full" animationData={Card} />
          </div>
          <div className=''>
            <Button text="Contact" />
          </div>

          <ul className='w-[80%] flex flex-col items-center mt-26 gap-2 text-center'>
            <li className='text-5xl mb-12'>Projects</li>
            <li className='text-3xl'>Shuify</li>
            <li>Technologies Used: JavaScript, HTML, CSS, Canvas, Vercel Deployment.</li>
            <li className='mb-6'>Developed and deployed an interactive front-end, drag-and-drop web application for arranging furniture in an isometric room. Persistent local storage to save and restore room layouts across sessions. Implemented a responsive UI across numerous devices and browsers. Carried out thorough testing, identifying, documenting, and fixing any UI/UX issues and software errors.
            </li>
            <Button text="Live" />
            <img src="..\src\assets\shuify.png" alt="" className=' border-4 border-[hsl(345,100%,47%)] rounded-2xl overflow-hidden mt-4' />
          </ul>
        </main>
        <footer></footer>
      </div >
    </>
  )
}

export default App

/* Custom Designs, Custom Coded



Get Started About Us*/