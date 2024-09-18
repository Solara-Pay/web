import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  GraduationCap,
  CreditCard,
  CalendarDays,
  File,
  User,
  Menu,
  X,
} from "lucide-react";
const Sidebar = () => {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const navItems = [
    { href: "/dashboards/students", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/dashboards/students/profile", icon: User, label: "Profile" },
  ];

  return (
    <>
      <button
        onClick={toggleNav}
        className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200"
      >
        {navVisible ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={` z-50 flex mb-1 flex-col w-64 h-screen bg-gray-800 text-gray-100 p-4 shadow-lg transform ${
          navVisible ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:relative transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center mb-8 mt-4">
            {/* <Image
              src="/images/logo.png"
              width={150}
              height={50}
              alt="Logo"
              className="w-auto h-10"
            /> */}
          </div>

          <nav className="flex-grow">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`flex items-center p-3 rounded-lg transition-colors duration-200 $
                    `}
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
