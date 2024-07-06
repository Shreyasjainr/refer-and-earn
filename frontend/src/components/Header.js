import React from 'react';

const Header = () => (
  <header className="bg-blue-50 py-4 ">
    <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
      <div className="flex items-center ">
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">accredian</div>
      </div>
      <nav className="flex items-center mt-4 lg:mt-0">
        <a className="text-blue-600 text-sm lg:text-base ml-6 cursor-pointer">Refer</a>
        <a className="text-gray-600 text-sm lg:text-base ml-6 cursor-pointer">Benefits</a>
        <a className="text-gray-600 text-sm lg:text-base ml-6 cursor-pointer">FAQs</a>
        <a className="text-gray-600 text-sm lg:text-base ml-6 cursor-pointer">Support</a>
      </nav>
      <div className="flex mt-4 lg:mt-0">
        <button className="text-blue-600 text-sm lg:text-base ml-6">Login</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm lg:text-base ml-4 lg:ml-6 mt-4 lg:mt-0">Try for free</button>
      </div>
    </div>
  </header>
);

export default Header;
