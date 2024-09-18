import Sidebar from "./sidebar";
import Footer from "./footer";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar className={"w-full"} /> */}

      <div className="flex flex-1 min-h-screen">
        <Sidebar className="w-64" />

        <main className="flex-1 p-4">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
