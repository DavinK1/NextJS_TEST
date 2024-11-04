'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          {/* Logo */}
          <div className="flex space-x-4">
            <button
              onClick={() => router.push('/')}
              className="flex items-center py-5 px-2 text-white font-bold text-2xl hover:text-blue-100 transition duration-300 ease-in-out hover:scale-110"
            >
              Next
              <span className="text-2xl text-yellow-400 font-bold">JS</span>
            </button>
          </div>

          {/* Primary Nav */}
          <div className="hidden md:flex items-center space-x-10">
            <button onClick={() => router.push('/')} className="text-blue-100 hover:text-white transition duration-300 ease-in-out hover:scale-110">Home</button>
            <button onClick={() => router.push('/pages/pagetest')} className="text-blue-100 hover:text-white transition duration-300 ease-in-out hover:scale-110">Test</button>

            {/* Dropdown for API */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-blue-100 hover:text-white transition duration-300 ease-in-out hover:scale-110"
              >
                API
              </button>
              {showDropdown && (
                <div className="absolute top-full mt-2 bg-white rounded-md shadow-lg z-10">
                  <button
                    onClick={() => router.push('/pages/api/product')}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white w-full text-left"
                  >
                    Products
                  </button>
                  <button
                    onClick={() => router.push('/pages/api/user')}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white w-full text-left"
                  >
                    Users
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => router.push('/pages/contact')} className="text-blue-100 hover:text-white transition duration-300 ease-in-out hover:scale-110">Contact</button>
            <button onClick={() => router.push('/pages/about')} className="text-blue-100 hover:text-white transition duration-300 ease-in-out hover:scale-110">About us</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-blue-200 focus:outline-none focus:text-blue-200">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}