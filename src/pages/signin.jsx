import React, { useState } from "react";
import { Mail, Lock, Loader2, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const SigninForm = () => {
  // State variables to hold user input
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Log user input (for testing)
    console.log("Email:", email, "Password:", password);

    // Prepare user data for submission
    const userData = {
      email,
      password,
    };

    try {
      // Fetch request to submit user data to the backend
      setLoading(true);
      const response = await fetch("/api/signin", {
        // Replace with actual endpoint
        method: "POST", // HTTP method
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify(userData), // Convert user data to JSON
      });

      if (!response.ok) {
        throw new Error("Network response was not ok"); // Handle error response
      }
      setLoading(false);
      const result = await response.json(); // Parse JSON response
      console.log("Success:", result); // Handle success (e.g., show a message)

      // Optionally redirect or show a success message here
    } catch (error) {
      setLoading(false);
      console.error("Error:", error); // Handle fetch error
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden">
        <div className="px-10 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Sign In
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              {/* Input for Email */}
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

              {/* Input for Password */}
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

              {/* Submit Button */}
              <button
                disabled={loading}
                type="submit"
                className={`w-full rounded-md px-4 py-3 font-semibold transition-colors duration-300 ${
                  loading ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"
                } text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
              >
                {loading ? (
                  <Loader2 className="animate-spin h-5 w-5" />
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gray-100 px-10 py-6">
          <p className="text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-purple-600 font-semibold hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
