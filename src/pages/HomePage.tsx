import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const HomePage: React.FC = () => {
  // Chatbot logic
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hello! I'm power Bot. How can I assist you today?" }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const responses: Record<string, string> = {
    'energy types': 'We offer Natural Gas, Coal, and Nuclear energy. Which one would you like to know more about?',
    'offers': 'We have Residential and Business offers. You can also compare them. Which one interests you?',
    'customer support': 'Our dedicated team is available 24/7. How can we assist you?',
    'company services': 'We provide Energy Supply, Energy Consultation, and Customer Support. What would you like to know more about?',
    'key figures': 'We have over 25 years of experience, 500k+ satisfied customers, and a 98% satisfaction rate. How can we help you today?'
  };

  function getResponse(message: string) {
    const lower = message.toLowerCase();
    for (const key in responses) {
      if (lower.includes(key)) return responses[key];
    }
    return "I'm sorry, I didn't understand that. Can you please rephrase?";
  }

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setTimeout(() => {
      setMessages(msgs => [...msgs, { from: 'bot', text: getResponse(input) }]);
    }, 500);
    setInput('');
  };

  useEffect(() => {
    if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages, chatOpen]);

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
      <section className="py-16 bg-white/80">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-10">What Our Customers Say</h2>
          <div className="relative">
            {/* Carousel container */}
            <div className="flex overflow-x-auto no-scrollbar space-x-8 pb-4 snap-x snap-mandatory">
              {/* Testimonial 1 */}
              <div className="min-w-[320px] bg-white rounded-lg shadow p-6 flex flex-col items-center snap-center">
                <img src="/images/customer1.jpg" alt="Customer 1" className="h-16 w-16 rounded-full mb-4 object-cover border-2 border-pink-300" />
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-center mb-4">“Switching to this company was the best decision for our family. The service is reliable and the savings are real!”</p>
                <span className="font-semibold text-primary">Sarah L.</span>
                <span className="text-xs text-gray-400">Residential Customer</span>
              </div>
              {/* Testimonial 2 */}
              <div className="min-w-[320px] bg-white rounded-lg shadow p-6 flex flex-col items-center snap-center">
                <img src="/images/customer2.jpg" alt="Customer 2" className="h-16 w-16 rounded-full mb-4 object-cover border-2 border-blue-300" />
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-center mb-4">“Our business energy costs dropped and the support team is always there when we need them. Highly recommended!”</p>
                <span className="font-semibold text-primary">James T.</span>
                <span className="text-xs text-gray-400">Business Customer</span>
              </div>
              {/* Testimonial 3 */}
              <div className="min-w-[320px] bg-white rounded-lg shadow p-6 flex flex-col items-center snap-center">
                <img src="/images/customer3.jpg" alt="Customer 3" className="h-16 w-16 rounded-full mb-4 object-cover border-2 border-green-300" />
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-center mb-4">“The transition to renewable energy was seamless. I appreciate the transparency and eco-friendly approach.”</p>
                <span className="font-semibold text-primary">Priya S.</span>
                <span className="text-xs text-gray-400">Eco-conscious Customer</span>
              </div>
            </div>
            {/* Carousel navigation (optional, for accessibility) */}
            <div className="flex justify-center mt-4 space-x-2">
              <span className="h-2 w-2 bg-pink-400 rounded-full inline-block"></span>
              <span className="h-2 w-2 bg-blue-300 rounded-full inline-block"></span>
              <span className="h-2 w-2 bg-green-300 rounded-full inline-block"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Switch to Cleaner, Smarter Energy?</h2>
          <p className="text-lg mb-8">Join thousands of satisfied customers and make the move to reliable, sustainable power today.</p>
          <a href="/offers" className="inline-flex items-center bg-white text-pink-600 font-bold px-8 py-4 rounded-full shadow-lg text-xl hover:bg-pink-100 transition">
            Get Started
            <svg className="ml-3 h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>

      {/* Chatbot Widget */}
      <div>
        <button
          className="fixed bottom-6 right-6 z-50 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg p-4 flex items-center focus:outline-none"
          onClick={() => setChatOpen(v => !v)}
          aria-label="Open chat bot"
        >
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2m2-4h4a2 2 0 012 2v4H7V6a2 2 0 012-2z" /></svg>
        </button>
        {chatOpen && (
          <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-xl shadow-2xl border border-pink-200 flex flex-col">
            <div className="bg-pink-500 text-white px-4 py-3 rounded-t-xl font-bold flex items-center justify-between">
              <span>Chat with Power Bot</span>
              <button onClick={() => setChatOpen(false)} className="text-white hover:text-pink-200">&times;</button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto max-h-64 space-y-2" style={{ minHeight: 200 }}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`px-3 py-2 rounded-lg text-sm ${msg.from === 'user' ? 'bg-pink-100 text-pink-700' : 'bg-pink-500 text-white'}`}>{msg.text}</div>
                </div>
              ))}
              <div ref={chatEndRef}></div>
            </div>
            <div className="flex border-t border-pink-100">
              <input
                className="flex-1 px-3 py-2 rounded-bl-xl focus:outline-none"
                type="text"
                placeholder="Type your question..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
              />
              <button
                className="px-4 py-2 bg-pink-500 text-white rounded-br-xl hover:bg-pink-600 font-bold"
                onClick={handleSend}
              >Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
