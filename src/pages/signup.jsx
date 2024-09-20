import React, { useState } from "react";
import { Mail, Lock, User, EyeOff, Eye, Wallet, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState(""); // New state for username
  const [walletAddress, setWalletAddress] = useState(""); // New state for wallet address
  const [country, setCountry] = useState(""); // New state for country
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Name:",
      name,
      "Email:",
      email,
      "Username:",
      username,
      "Wallet Address:",
      walletAddress,
      "Country:",
      country,
      "Password:",
      password
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden">
        <div className="px-10 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Create Account
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  className="w-full bg-gray-100 text-gray-800 border-0 rounded-md px-4 py-3 pl-11 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  className="w-full bg-gray-100 text-gray-800 border-0 rounded-md px-4 py-3 pl-11 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  required
                />
              </div>

              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  className="w-full bg-gray-100 text-gray-800 border-0 rounded-md px-4 py-3 pl-11 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                />
              </div>

              <div className="relative">
                <Wallet
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />

                <input
                  className="w-full bg-gray-100 text-gray-800 border-0 rounded-md px-4 py-3 pl-11 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  type="text"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  placeholder="Wallet Address"
                  required
                />
              </div>

              <div className="relative">
                <MapPin
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />

                <input
                  className="w-full bg-gray-100 text-gray-800 border-0 rounded-md px-4 py-3 pl-11 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Country"
                  required
                />
              </div>

              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  className="w-full bg-gray-100 text-gray-800 border-0 rounded-md px-4 py-3 pl-11 pr-11 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  className="w-full bg-gray-100 text-gray-800 border-0 rounded-md px-4 py-3 pl-11 pr-11 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white rounded-md px-4 py-3 font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gray-100 px-10 py-6">
          <p className="text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-purple-600 font-semibold hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
