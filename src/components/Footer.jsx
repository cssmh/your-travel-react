// App.js
import React from 'react';
import { Link } from 'react-router-dom';
import { company, services, support } from '../Constants/FooterData';

function Footer() {
  return (
    <div className="flex flex-col items-center">
      {/* Subscription Section */}
      <div className="bg-red-600 text-white w-5/6 md:w-3/4 p-4 py-8 md:p-12 flex flex-col items-center rounded-3xl shadow-md">
        <h2 className="text-sm md:text-3xl font-semibold p-4 flex flex-col items-end">
          Your Travel Journey Starts Here
          <img src="layer.png" alt="layer" className="mt-2 w-[100px] md:w-[150px]" />
        </h2>
        <p className="mb-4 p-1 md:p-4 text-center text-xs md:text-base">Don't wanna miss something? Sign up and we'll send the best deals to you</p>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Enter your Email"
            className="p-4 rounded-l-xl border-none focus:outline-none w-36 sm:w-44 md:w-72 text-black text-sm md:text-base"
          />
          <button className="bg-white p-4 text-red-600 rounded-r-xl text-sm md:text-base font-semibold hover:bg-gray-300">
            Sign up
          </button>

        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-12 bg-gray-100 w-[100%]">
        <div class="w-3/4 m-auto py-8">
          <div className="flex justify-between flex-wrap">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold my-2">Company</h3>
              <ul className='text-sm lg:text-base'>
                {company.map((link, index) => (
                  <li key={index} className='pt-2'>
                    <Link to={link.url} className="text-gray-600 hover:text-red-600">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Services */}
            <div>
              <h3 className="text-lg font-bold my-2">Other Services</h3>
              <ul className='text-sm lg:text-base'>
                {services.map((link, index) => (
                  <li key={index} className='pt-2'>
                    <a href={link.url} className="text-gray-600 hover:text-red-600">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className='mt-4 md:mt-0'>
              <h3 className=" text-lg font-bold my-2">Support</h3>
              <ul className='text-sm lg:text-base'>
                {support.map((link, index) => (
                  <li key={index} className='pt-2'>
                    <a href={link.url} className="text-gray-600 hover:text-red-600">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className='mt-4 md:mt-0'>
              <h3 className="text-lg font-bold my-2">Contact Us</h3>
              <div className='text-xs lg:text-base'>
              <p className="text-gray-600">Toll Free Customer Care</p>
              <p className="text-red-600 font-bold">+44 123 456 7890</p>
              <p className="text-gray-600 mt-2">Need live support?</p>
              <p className="text-red-600 font-semibold">hr@yourtrip24.com</p></div>
              <div className="mt-4">
                <div className="flex">
                  <a href="#" className="mr-2">
                    <img src="Android.jpeg" alt="umer1" className='w-[100px] md:w-[150px] ' />
                  </a>
                </div>
                <div className="flex mt-2">
                  <a href="#">
                    <img src="Apple.png" alt="umer1" className='w-[100px] md:w-[150px]' />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Footer Bottom */}
          <hr className="border-gray-500 mt-6  " />
          <div className="my-4 text-gray-500 flex justify-between text-[8px] sm:text-base">
            <p>Copyright © 2024 by yourtrip24</p>
            <div className='flex space-x-2 md:space-x-8'>
              <p>USD</p>
              <p>English</p>
              <p>youtrip24</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
