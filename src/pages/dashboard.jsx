import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";
import { Box, CircularProgress } from "@mui/material";

// Dashboard component to display the overall statistics
const Dashboard = () => {
  const [data, setData] = useState(null); // State for data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for errors

  // Fetch user data when the component mounts
  useEffect(() => {
    const controller = new AbortController(); // Create AbortController to cancel request if unmounted

    const fetchUserData = async () => {
      const accessToken = localStorage.getItem("accessToken"); // Get token from localStorage
      try {
        setLoading(true);
        const response = await fetch(
          "https://script.teendev.dev/solara/api/details",
          {
            method: "GET", // GET request
            headers: {
              Authorization: `Bearer ${accessToken}`, // Add Bearer token to headers
              "Content-Type": "application/json",
            },
            // signal: controller.signal, // Attach the abort signal
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok"); // Throw an error for non-200 responses
        }

        const result = await response.json();
        setData(result); // Set the fetched data to state
        //console.log(result)
        setLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted"); // Handle fetch abort
        } else {
          setError("Error fetching data: " + error.message);
          toast.error("Error fetching user data: " + error.message); // Toast the error message
          setLoading(false);
        }
      }
    };

    fetchUserData(); // Call the fetch function

    // Cleanup function
    return () => {
      controller.abort(); // Abort the fetch request when unmounted
    };
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) return <div>Error: {error}</div>; // Show error state

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <h1 className="mb-6 text-gray-200 text-3xl font-semibold">Dashboard</h1>

      {/* Statistics cards for displaying key metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {[
          { title: "Transactions Sum", value: data?.transactionsum + 'SOL', color: "text-green-400" },
          {
            title: "Total Transactions",
            value: data?.transactioncount,
            color: "text-blue-400",
          },
        //   {
        //     title: "Total Customers",
        //     value: data?.customers,
        //     color: "text-yellow-400",
        //   },
          {
            title: "Total Payroll",
            value: data?.payrollgroup,
            color: "text-orange-400",
          },
          {
            title: "Total Payroll Recipients",
            value: data?.payrollrecipient,
            color: "text-purple-400",
          },
          {
            title: "Total Payroll Sum",
            value: data?.payrollsums + 'SOL',
            color: "text-red-400",
          },
        ].map((card, index) => (
          <div
            key={index} // Unique key for each card
            className="bg-gray-700 shadow-lg rounded-lg p-4 transform transition-transform hover:scale-105"
          >
            <h2 className="mb-2 text-gray-300">{card.title}</h2>
            <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
          </div>
        ))}
      </div>

      {/* Bar chart section for visualizing revenue vs transactions */}


     <ToastContainer/>
    </div>
  );
};

export default Dashboard;
