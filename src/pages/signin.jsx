import React, { useState } from "react";
import { Mail, Lock, EyeOff, Eye } from "lucide-react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Email:",
      email,
      "Password:",
      password,
      "Remember Me:",
      rememberMe
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden">
        <div className="px-10 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
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
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500 border-gray-300"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white rounded-md px-4 py-3 font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-300"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gray-100 px-10 py-6">
          <p className="text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-purple-600 font-semibold hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
