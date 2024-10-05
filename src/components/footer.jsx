import React from "react";
import {
  Twitter,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight">SOLARA PAY</h1>
            <p className="text-gray-300 text-base">
            Helping companies pay salaries instantly, on time and enhancing their workflow
            </p>
            <div className="flex space-x-6">
              {[Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="https://x.com/thesolara"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <span className="sr-only">{Icon.name}</span>
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                "Home",
                "Why Choose Us",
                "Customer Us",
                "Contact Us",
                "Disclaimer",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Privacy", "Terms", "Cookie Policy", "Trademark Policy"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {[
                { Icon: Mail, text: "solara@teendev.dev" },
                // { Icon: Phone, text: "solara customercare" },
                // { Icon: MapPin, text: "123 Solara" },
              ].map(({ Icon, text }, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Icon className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            &copy; {currentYear} Solara Pay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
