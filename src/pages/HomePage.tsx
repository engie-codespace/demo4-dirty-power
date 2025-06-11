import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* Our Services Section */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our complete range of energy services tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Energy Supply</h3>
              <p className="text-gray-600 text-center mb-6">
                We offer reliable and transparent energy contracts for both residential and business customers.
              </p>
              <div className="text-center">
                <Link to="/offers" className="text-primary font-medium hover:text-secondary">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Energy Consultation</h3>
              <p className="text-gray-600 text-center mb-6">
                Our experts help you optimize your energy consumption and reduce your bills.
              </p>
              <div className="text-center">
                <Link to="/services" className="text-primary font-medium hover:text-secondary">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Customer Support</h3>
              <p className="text-gray-600 text-center mb-6">
                A dedicated customer service team available to answer all your questions and solve your problems.
              </p>
              <div className="text-center">
                <Link to="/contact" className="text-primary font-medium hover:text-secondary">
                  Contact us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Energy Consultation Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Step-by-step infographic */}
            <div className="flex flex-col space-y-8">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center">
                <svg className="h-8 w-8 text-pink-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h3" /></svg>
                Energy Consultation
              </h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <span className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-300 text-white font-bold mr-4">1</span>
                  <span className="text-lg text-gray-700">Free energy audit to assess your current usage</span>
                </div>
                <div className="flex items-center">
                  <span className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-400 text-white font-bold mr-4">2</span>
                  <span className="text-lg text-gray-700">Personalized recommendations for savings and efficiency</span>
                </div>
                <div className="flex items-center">
                  <span className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-400 text-white font-bold mr-4">3</span>
                  <span className="text-lg text-gray-700">Implementation support and ongoing monitoring</span>
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="flex flex-col justify-center">
              <p className="text-lg text-gray-700 mb-4">
                Our expert consultants help you optimize your energy consumption, reduce costs, and increase efficiency. We guide you every step of the way, ensuring you benefit from the latest innovations in sustainable energy.
              </p>
              <img src="/images/consultation-infographic.png" alt="Consultation Process" className="rounded-lg shadow-md border-2 border-pink-200 mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Support Section */}
      <section className="py-16 bg-white/80">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text and CTA */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold text-primary mb-4 flex items-center">
              <svg className="h-8 w-8 text-pink-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 10c0-3.866-3.582-7-8-7S2 6.134 2 10c0 2.21 1.79 4 4 4h1v2a2 2 0 002 2h2a2 2 0 002-2v-2h1c2.21 0 4-1.79 4-4z" /></svg>
              24/7 Customer Support
            </h2>
            <p className="text-lg text-gray-700">
              Our dedicated team is available around the clock to provide personalized assistance. Whether you have questions, need help with your account, or want to explore new services, we're here for you—anytime, anywhere.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full shadow transition">Contact Us</button>
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-pink-100 shadow-md cursor-pointer">
                <svg className="h-7 w-7 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2m2-4h4a2 2 0 012 2v4H7V6a2 2 0 012-2z" /></svg>
              </span>
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-center">
            <img src="/images/customer-support.png" alt="Customer Support" className="rounded-lg shadow-md border-2 border-pink-200 max-h-64" />
          </div>
        </div>
      </section>

      {/* Key Figures Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-10">Key Figures</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <svg className="h-10 w-10 text-pink-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
              <span className="text-4xl font-extrabold text-primary">25+</span>
              <span className="text-gray-700 mt-2">Years of Experience</span>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <svg className="h-10 w-10 text-yellow-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-3-3h-4a3 3 0 00-3 3v2h5z" /></svg>
              <span className="text-4xl font-extrabold text-primary">500k+</span>
              <span className="text-gray-700 mt-2">Satisfied Customers</span>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <svg className="h-10 w-10 text-blue-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
              <span className="text-4xl font-extrabold text-primary">98%</span>
              <span className="text-gray-700 mt-2">Satisfaction Rate</span>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <svg className="h-10 w-10 text-cyan-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h3" /></svg>
              <span className="text-4xl font-extrabold text-primary">100+</span>
              <span className="text-gray-700 mt-2">Community Projects</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">What Our Customers Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Discover testimonials from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Mary Johnson</h4>
                  <p className="text-sm text-gray-600">Residential customer since 2020</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The customer service is really excellent. I always get quick responses to my questions and the rates are very competitive."
              </p>
              <div className="mt-4 flex text-yellow-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold">John Smith</h4>
                  <p className="text-sm text-gray-600">SME Director, customer since 2018</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Thanks to personalized energy consultation, we've reduced our electricity bill by 15%. A reliable partner for our business."
              </p>
              <div className="mt-4 flex text-yellow-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sophia Williams</h4>
                  <p className="text-sm text-gray-600">Residential customer since 2019</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The transition to DirtyPower was simple and hassle-free. The prices are transparent and I've never had any surprises on my bill."
              </p>
              <div className="mt-4 flex text-yellow-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Energy Supply Section */}
      <section className="py-16 bg-white/80">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4 flex items-center">
              <svg className="h-8 w-8 text-pink-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Innovative Energy Supply
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Experience the future of energy with our innovative supply services. We deliver clean, reliable, and affordable power from renewable sources, ensuring sustainability and efficiency for every customer.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center"><svg className="h-6 w-6 text-yellow-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71" /></svg> Solar Power</li>
              <li className="flex items-center"><svg className="h-6 w-6 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12a9 9 0 0118 0c0 4.97-4.03 9-9 9s-9-4.03-9-9z" /></svg> Wind Energy</li>
              <li className="flex items-center"><svg className="h-6 w-6 text-cyan-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m9-9H3" /></svg> Hydroelectric Power</li>
            </ul>
          </div>
          {/* Right: Images/Icons */}
          <div className="flex flex-col items-center space-y-6">
            <img src="/images/solar-icon.png" alt="Solar" className="h-20 w-20 rounded-full shadow-lg bg-yellow-100 p-3" />
            <img src="/images/wind-icon.png" alt="Wind" className="h-20 w-20 rounded-full shadow-lg bg-blue-100 p-3" />
            <img src="/images/hydro-icon.png" alt="Hydro" className="h-20 w-20 rounded-full shadow-lg bg-cyan-100 p-3" />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to switch energy suppliers?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join DirtyPower today and benefit from competitive rates and quality customer service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/compare" 
              className="bg-white text-secondary font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare our offers
            </Link>
            <Link 
              to="/contact" 
              className="bg-accent text-white font-medium px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
