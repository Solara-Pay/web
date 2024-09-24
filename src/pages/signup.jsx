import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  EyeOff,
  Eye,
  Wallet,
  MapPin,
  Loader2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const userData = {
      name,
      email,
      username,
      wallet_address: walletAddress,
      country,
      password,
      password_confirmation: confirmPassword,
    };

    try {
      setLoading(true);
      const response = await fetch("https://script.teendev.dev/solara/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Get the error message from the server
        throw new Error(errorData.message || "Network response was not ok");
      }

      const result = await response.json();
      toast.success("Account created successfully!");
      setLoading(false);
      navigate("/signin"); // Redirect to signin page after successful registration
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      setLoading(false);
    }
  };

  if(token){
    navigate('/signin')
}
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 flex justify-center items-center p-4">
      <ToastContainer /> {/* Toast container to show notifications */}
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden">
        <div className="px-10 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Create Account
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
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
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
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
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
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
                <Wallet className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
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
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
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
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
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
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
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
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <button
                disabled={loading}
                type="submit"
                className={`w-full rounded-md px-4 py-3 font-semibold transition-colors duration-300 ${
                  loading ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"
                } text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
              >
                {loading ? <Loader2 className="animate-spin h-5 w-5" /> : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gray-100 px-10 py-6">
          <p className="text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <Link to="/signin" className="text-purple-600 font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
