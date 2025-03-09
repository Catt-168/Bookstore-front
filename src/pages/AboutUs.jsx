import React from 'react';
import Navbar from '../components/navbar/Navbar';

const AboutUs = () => {
  return (
    <div>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='layout'>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-15 mt-28">
          <div>
            <h1 className='text-3xl mb-5'>Our Company Overview</h1>
            <p className='text-lg'>At Inkspire, we believe that books have the power to transport, transform, and inspire. Our mission is to connect readers with stories that spark curiosity, fuel imagination, and leave a lasting impact. Whether you're searching for a timeless classic, a bestselling thriller, or an undiscovered indie gem, we strive to make every book lover’s journey effortless and enjoyable.</p>
            <p className='text-lg'>As an online bookstore, we are committed to providing a carefully curated selection across a wide range of genres, from fiction and non-fiction to self-improvement, fantasy, romance, and beyond. We understand that every reader is unique, which is why we offer personalized recommendations, insightful book reviews, and a seamless browsing experience to help you discover your next great read.</p>
            <p className='text-lg'>Beyond selling books, Inkspire is a community of passionate readers, writers, and dreamers. We aim to foster meaningful connections through literature, encouraging discussions, sharing bookish insights, and supporting independent authors. Our platform is designed to be more than just a place to shop—it’s a space where stories come to life, ideas are exchanged, and a love for reading is celebrated.
                Whether you're an avid bookworm or just beginning your literary journey, we invite you to explore, engage, and get Inkspired with us. Your next adventure is just a page away!</p>
          </div>
          
          <div className="grid grid-cols-2 mt-8 mx-4">
            <div className=''>
              <img src="/aboutImg1.png" alt=""/>
            </div>
            <div className='mt-5 '>
              <img src="/aboutImg2.png" alt="" />
            </div>
            <div className='ml-5 '>
              <img src="/aboutImg3.png" alt="" />
            </div>
            <div className='mt-5 ml-5 '>
              <img src="/aboutImg4.png" alt="" />
            </div>
           
          </div>

          

        </div>
        <div>

        </div>

      </div>
    </div>
  );
};

export default AboutUs;