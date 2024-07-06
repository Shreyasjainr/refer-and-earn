import React from 'react';

const Footer = () => (
  <footer className="bg-blue-50 py-3">
    <div className="container mx-auto px-4 text-center lg:text-left">
      <div className="flex h-auto flex-col lg:flex-row justify-center lg:justify-between items-center space-y-4 lg:space-y-0 lg:space-x-6 mb-4">
        <a className="text-blue-600 hover:text-blue-800">About Us</a>
        <a className="text-blue-600 hover:text-blue-800">Contact</a>
        <a className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
        <a className="text-blue-600 hover:text-blue-800">Terms of Service</a>
      </div>
      <p className="text-gray-600 text-center">&copy; 2024 Accredian. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
