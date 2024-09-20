import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./smfooter";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-700 flex flex-col">
      <Header />
      <div className="flex-grow flex">
        <Sidebar />
        <div className="flex-grow md:ml-64">
          <main className="min-h-[calc(100vh-64px)] p-4 overflow-y-auto mt-16">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
