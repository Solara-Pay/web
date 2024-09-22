import React, { useEffect, useState } from "react"; // Import useEffect and useState
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import UserDetailsPage from "../components/userdetails";

// Dummy data
const dummyData = {
  name: "John Doe",
  email: "john@example.com",
  username: "johndoe",
  country: "United States",
  wallet_address_balance: "1000 ETH",
  wallet_address: "0x1234...5678",
  onsite_wallet_balance: "500 USD",
  onsite_wallet_address: "0xabcd...efgh",
  api_key: "sk_test_1234567890",
  webhook: "https://example.com/webhook",
};

const Details = () => {
  const [userData, setUserData] = useState(null); // State to hold user data
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController instance
    const signal = controller.signal; // Get the signal

    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await fetch("api_endpoint", { signal }); // Replace with actual API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok"); // Throw an error for non-200 responses
        }
        setLoading(false);
        const data = await response.json();
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

    // fetchUserData(); uncomment this to call the function
    // Call the fetch function when the component mounts

    // Cleanup function
    return () => {
      controller.abort(); // Abort the fetch request when unmounted
    };
  }, []);

  // Render a loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
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
