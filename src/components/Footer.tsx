import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-gray-100 pt-12 pb-6 mt-12">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Contact Info */}
      <div>
        <h3 className="font-bold text-lg mb-2">Contact Us</h3>
        <p className="mb-1">123 Green Avenue<br />Eco City, EC 12345</p>
        <p className="mb-1">Phone: <a href="tel:+1234567890" className="text-pink-300 hover:underline">+1 (234) 567-890</a></p>
        <p>Email: <a href="mailto:info@pinklightenergy.com" className="text-pink-300 hover:underline">info@pinklightenergy.com</a></p>
      </div>
      {/* Company Details */}
      <div>
        <h3 className="font-bold text-lg mb-2">Company</h3>
        <ul className="space-y-1">
          <li>About Pinklight Energy</li>
          <li>Careers</li>
          <li>Press</li>
          <li>Legal</li>
        </ul>
      </div>
      {/* Quick Navigation */}
      <div>
        <h3 className="font-bold text-lg mb-2">Quick Links</h3>
        <ul className="space-y-1">
          <li><a href="/" className="hover:text-pink-300">Home</a></li>
          <li><a href="/energy-types" className="hover:text-pink-300">Energy Types</a></li>
          <li><a href="/compare" className="hover:text-pink-300">Compare</a></li>
          <li><a href="/offers" className="hover:text-pink-300">Offers</a></li>
          <li><a href="/contact" className="hover:text-pink-300">Contact</a></li>
        </ul>
      </div>
      {/* Social Media */}
      <div>
        <h3 className="font-bold text-lg mb-2">Follow Us</h3>
        <div className="flex space-x-4 mt-2">
          <a href="www.toto.com" aria-label="Twitter" className="hover:text-pink-300"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.67 1.64.9c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.7 2.16 2.94 4.07 2.97A9.05 9.05 0 010 21.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" /></svg></a>
          <a href="www.toto.com" aria-label="Facebook" className="hover:text-pink-300"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" /></svg></a>
          <a href="www.toto.com" aria-label="LinkedIn" className="hover:text-pink-300"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15.25 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" /></svg></a>
        </div>
      </div>
    </div>
    <div className="text-center text-gray-400 text-sm mt-8">&copy; {new Date().getFullYear()} Pinklight Energy. All rights reserved.</div>
  </footer>
);

export default Footer;
