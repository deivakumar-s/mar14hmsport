import React from 'react';
import logo from '../assests/logo.png';
import Products from '../components/Products';
import hospitalImage from '../assests/hms port.avif';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Dummy from './dummy';
import Particles from 'react-tsparticles';


const Main = () => {
  return (
    <div className="bg-gray-100">
      <header className="navbar flex justify-between items-center bg-gray-800 text-white py-4 px-6 sticky top-0 z-10">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="logo h-12" />
        </div>
        <nav className="flex items-center">
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="px-4 hover:text-gray-300 cursor-pointer">Home</Link>
          <Link to="service" spy={true} smooth={true} offset={-70} duration={500} className="px-4 hover:text-gray-300 cursor-pointer">Service</Link>
          <Link to="tab3" spy={true} smooth={true} offset={-70} duration={500} className="px-4 hover:text-gray-300 cursor-pointer">Products</Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="px-4 hover:text-gray-300 cursor-pointer">Contact</Link>
        </nav>
      </header>

      <main>
        <motion.section
          id="home"
          style={{ backgroundColor: '#092437' }}
          className="min-h-screen flex flex-col md:flex-row items-center justify-center mt-0"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="max-w-md w-full md:w-1/2 bg-white p-4 md:p-8 shadow-lg rounded-lg flex flex-col items-center md:items-start"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <motion.img
              src={hospitalImage}
              alt="Hospital"
              className="w-full md:max-w-md mb-4 md:mb-0"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            />
            <motion.h1
              className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-blue-900"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              Hospital Management System
            </motion.h1>
            <motion.p
              className="text-gray-700 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              Welcome to our Hospital Management System. This system is designed to streamline various processes within a hospital to ensure efficient management of patients, staff, and resources.
            </motion.p>
            <motion.div
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>
            </motion.div>
          </motion.div>
        </motion.section>

        <section id="service" className="py-8" style={{ backgroundColor: 'chocolate', minHeight: '500px' }}>
          <Dummy/>
        </section>

        <section id="tab3">
          <Products />
        </section>

        <section id="contact" className="py-8 bg-lightblue">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg">Get in touch with us for any inquiries or assistance.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};



export default Main;
