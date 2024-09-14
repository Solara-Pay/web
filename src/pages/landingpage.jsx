import {
  CreditCard,
  ArrowRight,
  ArrowLeftRight,
  WalletMinimal,
  ChevronDown,
  Mail,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const FeatureCard = ({ icon, heading, para }) => (
  <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden flex flex-col h-full transform transition duration-300 hover:scale-105 group">
    <div className="p-8 flex flex-col items-center text-center h-full">
      <div className="mb-6 text-blue-400 group-hover:text-blue-300 transition-colors">
        {icon}
      </div>
      <h2 className="text-2xl font-bold mb-4 text-blue-300 group-hover:text-blue-200 transition-colors">
        {heading}
      </h2>
      <p className="text-gray-300 mb-6 flex-grow">{para}</p>
      <a
        href="#"
        className="flex items-center justify-center text-blue-400 font-semibold hover:text-blue-300 transition-colors"
      >
        Learn More <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  </div>
);

const LandingPage = () => {
  const features = [
    {
      heading: "Seamless Crypto Payments",
      para: "Simplify cryptocurrency for your business with our straightforward solution: a reserved Solana wallet address easily integrated into your product.",
      icon: <ArrowLeftRight className="w-12 h-12" />,
    },
    {
      heading: "Real-Time Notifications",
      para: "Enhance user experience with immediate payment feedback, reducing manual checks and improving financial transparency.",
      icon: <CreditCard className="w-12 h-12" />,
    },
    {
      heading: "Instant Wallet Generation",
      para: "Generate unique Solana wallet addresses instantly through a simple API call, eliminating complex wallet setups for your business.",
      icon: <WalletMinimal className="w-12 h-12" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />

      <section
        id="hero"
        className="hero h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              Collect Solana Payments{" "}
              <span className="text-blue-400">Effortlessly</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 animate-fade-in-up animation-delay-200">
              Revolutionize your business with our seamless Solana payment
              solution. Integrate cryptocurrency payments effortlessly and
              securely.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 uppercase tracking-wider animate-fade-in-up animation-delay-400">
              Get Started Now
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-10"></div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </div>
      </section>

      <section className="py-20 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-300">
            Trusted by Industry Leaders
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {["solana", "solflare", "radar"].map((brand, index) => (
              <div
                key={brand}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img
                  src={`/assets/images/brands/${brand}.png`}
                  alt={brand}
                  className="h-12 opacity-80 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-900 bg-opacity-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-300">
            Our Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="support"
        className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
              24/7 Customer Support
            </h2>
            <p className="text-xl text-gray-200 mb-10 animate-fade-in-up animation-delay-200">
              We're committed to your success. Our dedicated support team is
              always ready to assist you, anytime you need it.
            </p>
            <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 uppercase tracking-wider animate-fade-in-up animation-delay-400">
              Contact Support
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 animate-pulse"></div>
      </section>

      <section id="waitlist" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
              Join Our Waitlist
            </h2>
            <p className="text-xl text-gray-300 mb-10 animate-fade-in-up animation-delay-200">
              Be among the first to experience the future of Solana payments.
              Sign up now for exclusive early access and updates.
            </p>
            <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:w-96 p-4 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300 flex items-center justify-center"
              >
                <Mail className="mr-2" /> Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
