import React from 'react';
import logo from '../assets/logo.png';


const Header = () => {
  return (
    <>
      <header className="navbar flex justify-between items-center bg-gray-800 text-white py-2 px-6 sticky top-0 z-10">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="logo mt-2" style={{ height: '70px' }} />
        </div>
        <nav className="flex items-center">
          <a href="#home" className="px-4 hover:text-gray-300">Home</a>
          <a href="#service" className="px-4 hover:text-gray-300">Service</a>
          <a href="#products" className="px-4 hover:text-gray-300">Products</a>
          <a href="#technologies" className="px-4 hover:text-gray-300">Technologies</a>
          <a href="#contact" className="px-4 hover:text-gray-300">Contact</a>
        </nav>
      </header>

      <main className="container mx-auto py-8">
        <div id="home" className="py-8" style={{backgroundColor:'GrayText', height:'500px'}}>
          <h2 className="text-2xl font-bold mb-4">Welcome to Your Website</h2>
          <p className="text-lg">This is the home page content. You can add whatever you want here.</p>
        </div>
        <div id="service" className="py-8" style={{backgroundColor:'chocolate', height:'500px'}}>
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <p className="text-lg">This is the service page content. You can add your services here.</p>
        </div>
      </main>
    </>
  );
};

export default Header;