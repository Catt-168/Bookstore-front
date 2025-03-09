import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className=" layout relative">
        <img src="/contactBg.png" alt="contactus" className='w-full rounded-md mt-26'/>
        
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
          <div className="container mx-auto px-4 py-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6  text-black  text-xl ">
                <p>Our friendly support team is ready to assist you! Reach out to us via email at [your email], call us at [your phone number], or fill out our contact form. We strive to respond within 24 hours. Your satisfaction is our priority!
                Let me know if you need any tweaks!</p>
                
                <div className="mb-2 mt-10 flex flex-row gap-4 items-center">
                  
                  <img src="/AddressIcon.svg" alt="addressicon" />
                  <div> 
                  <p><strong>Address:</strong></p>
                  <p>No.1/39, Building 15 Parami Valley</p>

                  </div>
                  
                </div>

                <div className="mb-2 flex flex-row gap-4 items-center">
                <img src="/PhoneIcon.svg" alt="Phone icon" />
                <div>
                  <p><strong>Phone:</strong></p> 
                  <p>0775035648</p>
                </div>
                  
                </div>

                <div className="mb-2 flex flex-row gap-4 items-center">
                <img src="/EmailIcon.svg" alt="Email icon" />
                <div>
                  <p><strong>Email:</strong></p> 
                  <p> inkspire39@gmail.com</p>
                </div>
                  
                </div>
              </div>
              
              <div className="p-6 shadow-md text-black bg-[rgba(255, 255, 255, 0.53)] backdrop-blur-lg rounded-lg border border-[rgba(0,0,0,0.3)]">
                <h2 className="text-2xl text-center font-semibold mb-4">GET IN <span className='text-custom-orange'>TOUCH</span>  WITH US</h2>
                <form>
                  <div className="mb-4">
                    
                    <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg text-lg" placeholder="Name" />
                  </div>
                  <div className="mb-4">
                    <input type="text" id="phone" className="w-full px-3 py-2 border rounded-lg text-lg" placeholder="Phone Number" />
                  </div>
                  <div className="mb-4">
                    <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg text-lg" placeholder="Email" />
                  </div>
                  <div className="mb-4">
                    <textarea id="message" className="w-full px-3 py-2 border rounded-lg text-lg" rows="4" placeholder="Message"></textarea>
                  </div>
                  <div className='flex justify-center'>
                    <button type="submit" className="bg-custom-orange text-white text-xl font-bold px-20 py-2 rounded-md hover:bg-custom-orange ">Submit</button>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;