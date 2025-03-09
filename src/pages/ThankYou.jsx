import React from 'react';
import Navbar from '../components/navbar/Navbar';

const ThankYou = () => {
  return (
    <div 
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/tyBg.jpg')" }}
    >
        <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur"></div>

        
      <div className="relative z-10 flex flex-col p-8 rounded-lg items-center justify-center text-center h-[80%]">
        <h1 className="text-5xl font-bold text-custom-metallic mb-4">
          Thank You For Your Purchase!!
        </h1>
        <img 
              src="/logoImg.png" 
              alt="INKSPIRE Logo" 
              className="w-80" 
            />
      </div>
    </div>
  );
};

export default ThankYou;