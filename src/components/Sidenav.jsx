// src/components/SideNav.js
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Box, LayoutDashboard, PieChart, Sliders, ChevronLeft, ChevronRight } from 'lucide-react';

const SideNav = () => {
  const [isVisible, setIsVisible] = useState(true); // Start with sidebar visible

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 p-2 text-gray-600 hover:bg-blue-100 rounded-full transition-all duration-300 z-50"
      >
        {isVisible ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
      </button>

      {/* Side Navigation */}
      {isVisible && (
        <div className="pt-28 h-screen w-20 bg-blue-50 border-r border-gray-200 transition-all duration-300">
          {/* Navigation Links */}
          <nav className="p-4">
            <ul className="space-y-6">
              {/* Home Link */}
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-center p-3 text-gray-700 hover:bg-blue-100 rounded-lg transition-all duration-300 group relative"
                >
                  <Home className="w-5 h-5 text-blue-600" />
                  <span className="absolute left-16 bg-blue-700 text-white text-xs font-semibold uppercase px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Home
                  </span>
                </Link>
              </li>

              {/* Stock Metrics */}
              <li>
                <Link
                  to="/stock-metrics"
                  className="flex items-center justify-center p-3 text-gray-700 hover:bg-blue-100 rounded-lg transition-all duration-300 group relative"
                >
                  <Box className="w-5 h-5 text-blue-600" />
                  <span className="absolute left-16 bg-blue-700 text-white text-xs font-semibold uppercase px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Stock Metrics
                  </span>
                </Link>
              </li>

              {/* Shelf Utilisation */}
              <li>
                <Link
                  to="/shelf-utilisation"
                  className="flex items-center justify-center p-3 text-gray-700 hover:bg-blue-100 rounded-lg transition-all duration-300 group relative"
                >
                  <LayoutDashboard className="w-5 h-5 text-blue-600" />
                  <span className="absolute left-16 bg-blue-700 text-white text-xs font-semibold uppercase px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shelf Utilisation
                  </span>
                </Link>
              </li>

              {/* Numeric Metrics */}
              <li>
                <Link
                  to="/numeric-metrics"
                  className="flex items-center justify-center p-3 text-gray-700 hover:bg-blue-100 rounded-lg transition-all duration-300 group relative"
                >
                  <PieChart className="w-5 h-5 text-blue-600" />
                  <span className="absolute left-16 bg-blue-700 text-white text-xs font-semibold uppercase px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Numeric Metrics
                  </span>
                </Link>
              </li>

              {/* Data Granularity */}
              <li>
                <Link
                  to="/data-granularity"
                  className="flex items-center justify-center p-3 text-gray-700 hover:bg-blue-100 rounded-lg transition-all duration-300 group relative"
                >
                  <Sliders className="w-5 h-5 text-blue-600" />
                  <span className="absolute left-16 bg-blue-700 text-white text-xs font-semibold uppercase px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Data Granularity
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default SideNav;