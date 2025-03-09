import React from 'react';
import { NavLink } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="flex flex-col gap-14 items-center justify-center w-screen h-screen bg-cover bg-center text-center" style={{ backgroundImage: "url('/welcomeBg.jpg')" }}>
       
        <div>
        <h1 className='font-bold text-custom-orange text-4xl mb-5'>Welcome to Inkspire</h1>
        <p className='text-2xl text-black'>Where every page explore opens a new world</p>

        </div>
        <div>
        <NavLink to="/genre-selection"> 
        <button className="px-8 py-4 bg-custom-orange shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)] text-white font-semibold text-3xl rounded-md hover:bg-[#D96C4A] transition-colors">
                Let's Get Started
              </button>
        </NavLink>
        </div>
    </div>
    
  )
}

export default WelcomePage