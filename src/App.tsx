import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/category/:categorySlug" element={<CategoryPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/search" element={<SearchPage />} />

            {/* Placeholder routes for other pages */}
            <Route path="/account" element={<div className="min-h-screen bg-gray-50 py-16"><div className="max-w-7xl mx-auto px-4 text-center"><h1 className="text-4xl font-bold">Account Page</h1><p className="mt-4 text-gray-600">Coming soon!</p></div></div>} />
            <Route path="/specials" element={<div className="min-h-screen bg-gray-50 py-16"><div className="max-w-7xl mx-auto px-4 text-center"><h1 className="text-4xl font-bold">Special Offers</h1><p className="mt-4 text-gray-600">Great deals coming soon!</p></div></div>} />
            <Route path="/contact" element={<div className="min-h-screen bg-gray-50 py-16"><div className="max-w-7xl mx-auto px-4 text-center"><h1 className="text-4xl font-bold">Contact Us</h1><p className="mt-4 text-gray-600">📞 1-800-CLS-TOOL</p></div></div>} />
            <Route path="/shipping" element={<div className="min-h-screen bg-gray-50 py-16"><div className="max-w-7xl mx-auto px-4 text-center"><h1 className="text-4xl font-bold">Shipping Info</h1><p className="mt-4 text-gray-600">Free shipping on orders over $99!</p></div></div>} />
            <Route path="/returns" element={<div className="min-h-screen bg-gray-50 py-16"><div className="max-w-7xl mx-auto px-4 text-center"><h1 className="text-4xl font-bold">Returns</h1><p className="mt-4 text-gray-600">60-day return policy</p></div></div>} />
            <Route path="/warranty" element={<div className="min-h-screen bg-gray-50 py-16"><div className="max-w-7xl mx-auto px-4 text-center"><h1 className="text-4xl font-bold">Warranty</h1><p className="mt-4 text-gray-600">Quality guaranteed</p></div></div>} />

            {/* 404 Page */}
            <Route path="*" element={<div className="min-h-screen bg-gray-50 py-16"><div className="max-w-7xl mx-auto px-4 text-center"><h1 className="text-4xl font-bold">Page Not Found</h1><p className="mt-4 text-gray-600">The page you're looking for doesn't exist.</p></div></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
