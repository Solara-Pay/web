import React from "react";
import { Search, Bell, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 shadow-md z-50 h-16">
      <div className="max-w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        <div className="flex">
          <h1 className="font-bold text-3xl text-indigo-300 tracking-wide">
            SOLARA
          </h1>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-200 placeholder-gray-400"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="text-gray-400 hover:text-indigo-300 transition-colors duration-200">
            <Bell className="h-6 w-6" />
          </button>
          <Link
            to="/profile"
            className="text-gray-400 hover:text-indigo-300 transition-colors duration-200"
          >
            <User className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
