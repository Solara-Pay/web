import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ListCollapse,
  ArrowRightLeft,
  Menu,
  X,
  User,
  Wallet,
  Code,
} from "lucide-react";

const Sidebar = () => {
  const [navVisible, setNavVisible] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const navItems = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/account", icon: User, label: "Customers" },
    { href: "/wallet", icon: Wallet, label: "My Wallet" },
    { href: "/transactions", icon: ArrowRightLeft, label: "Transactions" },
    { href: "/details", icon: ListCollapse, label: "Account Details" },
    { href: "/developer", icon: Code, label: "Developer Tools" },
  ];

  return (
    <>
      <button
        onClick={toggleNav}
        className="md:hidden fixed top-10 right-4 z-50 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-600 transition-colors duration-200"
      >
        {navVisible ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`fixed top-20 left-0 z-40 flex flex-col w-64 h-screen bg-gray-800 text-gray-100 shadow-lg transform ${
          navVisible ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          {/* <div className="flex items-center justify-center h-16 bg-gray-900">
            <h1 className="text-xl font-bold text-white">SOLARA</h1> */}
          {/* </div> */}

          <nav className="flex-1 overflow-y-auto mt-20 py-4">
            <ul className="space-y-2 px-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                      location.pathname === item.href
                        ? "bg-gray-700 text-white"
                        : "hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
