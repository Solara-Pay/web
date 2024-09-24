import { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
const Wallet = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken"); // Get token from localStorage

        if (!accessToken) {
          throw new Error("No access token found"); // Handle missing token
        }

        const response = await fetch(
          "https://script.teendev.dev/solara/api/wallet",
          {
            method: "GET", // GET request
            headers: {
              Authorization: `Bearer ${accessToken}`, // Add Bearer token to headers
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok"); // Handle non-200 responses
        }

        const result = await response.json(); // Parse JSON response
        //console.log(result);
        setData(result); // Save data to state
        setLoading(false); // Turn off loading
      } catch (error) {
        setError(error.message); // Save error to state
        setLoading(false); // Turn off loading
      }
    };

    fetchData(); // Trigger data fetch on mount
  }, []);

  // Render loading, error, or the fetched data
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) return <p className="text-red-400">Error: {error}</p>;

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <h1 className="mb-6 text-gray-200 text-3xl font-semibold">Wallet</h1>

      <div className="flex justify-center">
        <div className="bg-gray-900 shadow-lg rounded-lg p-6 w-full max-w-md transform transition-transform hover:scale-105">
          <h2 className="mb-4 text-gray-200 text-xl">Wallet Overview</h2>

          {data ? (
            <>
              <div className="mb-4">
                <h3 className="text-gray-400">Personal Wallet Balance</h3>
                <p className="text-2xl font-bold text-green-400">
      {typeof data.wallet_address_balance  === 'object' && data.wallet_address_balance !== null && 'error' in data.wallet_address_balance
        ? '0 SOL'
        : `${data.wallet_address_balance ?? 0} SOL`}
    </p>
              </div>
              <div>
                <h3 className="text-gray-400">Onsite Wallet Balance</h3>
                <p className="text-2xl font-bold text-blue-400">
                  {data.onsite_wallet_balance ?? 0} SOL
                </p>
              </div>
            </>
          ) : (
            <p className="text-gray-400">No wallet data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
