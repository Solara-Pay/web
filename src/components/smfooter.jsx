const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 mx-1 rounded-t-md text-white py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm">
          &copy; {currentYear} SOLARA All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
