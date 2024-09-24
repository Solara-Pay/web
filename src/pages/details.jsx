import React, { useEffect, useState } from "react"; // Import useEffect and useState
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import UserDetailsPage from "../components/userdetails";
import { Box, CircularProgress } from "@mui/material";

const Details = () => {
  const [userData, setUserData] = useState(null); // State to hold user data
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController instance
    const signal = controller.signal; // Get the signal

    const fetchUserData = async () => {
        const accessToken = localStorage.getItem("accessToken"); // Get token from localStorage
      try {
        setLoading(true);
        const response = await fetch("https://script.teendev.dev/solara/api/details", {
            method: "GET", // GET request
            headers: {
              Authorization: `Bearer ${accessToken}`, // Add Bearer token to headers
              "Content-Type": "application/json",
            },
         }); // Replace with actual API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok"); // Throw an error for non-200 responses
        }
        setLoading(false);
        const data = await response.json();
        //console.log(data);
        setUserData(data); // Set the fetched data to state
      } catch (error) {
        setLoading(false);
        if (error.name === "AbortError") {
          console.log("Fetch aborted"); // Handle fetch abort
        } else {
          toast.error("Error fetching user data: " + error.message); // Toast the error message
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData(); //uncomment this to call the function
    // Call the fetch function when the component mounts
    // Cleanup function
    return () => {
      controller.abort(); // Abort the fetch request when unmounted
    };
  }, []);

  console.log(userData);
  // Dummy data
  const dummyData = {
    name: userData?.name || '', // Default to empty string if undefined
    email: userData?.email || '',
    username: userData?.username || '',
    country: userData?.country || '',
    wallet_address_balance: typeof userData?.wallet_address_balance === 'object'
    ? 0
    : userData?.wallet_address_balance || 0, // Default to 0 if undefined
    wallet_address: userData?.wallet_address || '',
    onsite_wallet_balance: userData?.onsite_wallet_balance || 0,
    onsite_wallet_address: userData?.onsite_wallet_address || '',
    api_key: userData?.api_key || '',
    webhook: userData?.webhook || ''
  };

  // Render a loading message while fetching data
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <UserDetailsPage user={dummyData} />{" "}
      {/* replace this with the user data Pass fetched user data to UserDetailsPage */}
      <ToastContainer /> {/* Include the ToastContainer to display toasts */}
    </>
  );
};

export default Details;
