import type React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const navigate = useNavigate();
  const { getCartItemsCount } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const cartItemsCount = getCartItemsCount();

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <span>Free shipping on orders over $99!</span>
            <div className="flex items-center space-x-4">
              <span>📞 1-800-CLS-TOOL</span>
              <Link to="/account" className="hover:underline">My Account</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl font-bold text-blue-600">CLS Shopline</h1>
            <span className="ml-2 text-sm text-gray-500">Professional Tools</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-3 top-2.5 text-gray-400 hover:text-blue-600"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Link to="/account">
              <User className="h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-600" />
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-600" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-12">
            <Menu className="h-5 w-5 mr-2" />
            <div className="flex space-x-8">
              <Link to="/products" className="hover:text-teal-400 transition-colors">All Tools</Link>
              <Link to="/category/power-tools" className="hover:text-teal-400 transition-colors">Power Tools</Link>
              <Link to="/category/hand-tools" className="hover:text-teal-400 transition-colors">Hand Tools</Link>
              <Link to="/category/diagnostic-tools" className="hover:text-teal-400 transition-colors">Diagnostic</Link>
              <Link to="/category/air-tools" className="hover:text-teal-400 transition-colors">Air Tools</Link>
              <Link to="/category/battery-tools" className="hover:text-teal-400 transition-colors">Battery Tools</Link>
              <Link to="/specials" className="hover:text-teal-400 transition-colors">Specials</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
