// src/components/Header.js

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          Data Profiling Studio
        </Link>
        
      </div>
    </header>
  );
};

export default Header;