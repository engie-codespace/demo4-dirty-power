import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <header className="relative bg-cover bg-center min-h-[350px] flex items-center justify-center" style={{ backgroundImage: "url('/images/renewable-header.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Powering Tomorrow: <span className="text-pink-300">Innovative</span> & <span className="text-pink-300">Sustainable</span> Energy Solutions
        </h1>
        <p className="text-lg md:text-2xl text-white font-light max-w-2xl mx-auto drop-shadow">
          Join us in leading the transition to clean, renewable energy for a brighter, greener future.
        </p>
      </div>
    </header>
  );
};

export default Hero;
