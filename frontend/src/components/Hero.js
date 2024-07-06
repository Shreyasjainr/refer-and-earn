import React from 'react';

const Hero = ({ onReferClick }) => (
  <div className="bg-blue-100 py-10">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-around">
      <div className="max-w-md text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Let's Learn & Earn</h1>
        <p className="text-gray-700 mb-6">Get a chance to win by refering</p>
        <p className="text-gray-700 mb-6">Click refer now</p>
        <button
          onClick={onReferClick}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          Refer Now
        </button>
      </div>
      <div className="lg:ml-8">
        <img
          src="https://t4.ftcdn.net/jpg/04/90/93/03/360_F_490930345_3ToZEj1ijJolIiC0LAsOSrjsxCiHUhzP.jpg"
          alt="Refer & Earn"
          className="rounded-lg"
        />
      </div>
    </div>
  </div>
);

export default Hero;
