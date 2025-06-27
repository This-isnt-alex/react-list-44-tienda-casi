import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CLS Shopline</h3>
            <p className="text-gray-400">Your trusted partner for professional tools and automotive equipment.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/category/power-tools" className="hover:text-white">Power Tools</Link></li>
              <li><Link to="/category/hand-tools" className="hover:text-white">Hand Tools</Link></li>
              <li><Link to="/category/diagnostic-tools" className="hover:text-white">Diagnostic Tools</Link></li>
              <li><Link to="/category/air-tools" className="hover:text-white">Air Tools</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-white">Shipping Info</Link></li>
              <li><Link to="/returns" className="hover:text-white">Returns</Link></li>
              <li><Link to="/warranty" className="hover:text-white">Warranty</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <span className="text-2xl cursor-pointer hover:text-blue-400">📘</span>
              <span className="text-2xl cursor-pointer hover:text-blue-400">🐦</span>
              <span className="text-2xl cursor-pointer hover:text-blue-400">📷</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CLS Shopline. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
