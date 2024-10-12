import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Box, CircularProgress } from "@mui/material";
const Developers = () => {
  const [activeTab, setActiveTab] = useState("apikeys");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [webhook, setWebhook] = useState('');

  // Function to fetch user data
  const fetchUserData = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/details`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
      setWebhook(result?.webhook || ''); // Initialize webhook from data
    } catch (error) {
      toast.error("Error fetching user data: " + error.message);
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">
        Developers Dashboard
      </h1>

      <div className="flex space-x-4 mb-8">
        <TabButton active={activeTab === "apikeys"} onClick={() => setActiveTab("apikeys")}>
          API Keys
        </TabButton>
        <TabButton active={activeTab === "webhooks"} onClick={() => setActiveTab("webhooks")}>
          Webhooks
        </TabButton>
      </div>

      {activeTab === "apikeys" ? <ApiKeys data={data} /> : <Webhooks webhook={webhook} setWebhook={setWebhook} />}
      <ToastContainer />
    </div>
  );
};

const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
      active
        ? "bg-blue-600 text-white shadow-lg"
        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
    }`}
  >
    {children}
  </button>
);

const apikeyNew = async () => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/regenerate/api-key`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    toast.success("API KEY REGENERATED, Kindly reload the page");
    window.location.reload();
  } catch (error) {
    toast.error("Error fetching user data: " + error.message);
    console.error("Error fetching user data:", error);
  }
};

const ApiKeys = ({ data }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-2xl">
      <h2 className="text-2xl font-semibold mb-6 text-blue-400">API Keys</h2>
      <div className="space-y-4">
        <KeyValuePair label="API Key" value={data?.api_key || "No API Key"} />
      </div>
      <div className="mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300" onClick={apikeyNew}>
          Generate New Keys
        </button>
      </div>
    </div>
  );
};

const Webhooks = ({ webhook, setWebhook }) => {
  const [loading, setLoading] = useState(false);
 const updateProfile = { webhook };
  const updateWebhook = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/update-profile`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateProfile),
      });
console.log(response, updateProfile);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast.success("Webhook updated successfully!");
    } catch (error) {
      toast.error("Error updating webhook: " + error.message);
      console.error("Error updating webhook:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-2xl">
      <h2 className="text-2xl font-semibold mb-6 text-blue-400">Webhooks</h2>
      <div className="space-y-4">
        <KeyValuePair label="Transaction Completion" value={webhook} />
        <WebhookField label="Edit Webhook URL" value={webhook} onChange={(e) => setWebhook(e.target.value)} />
      </div>
      <div className="mt-8">
        <button
          onClick={updateWebhook}
          disabled={loading}
          className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? "Updating..." : "Update Webhook URLs"}
        </button>
      </div>
    </div>
  );
};

const WebhookField = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-700 pb-4">
      <span className="text-gray-400 font-medium w-full sm:w-1/3 mb-2 sm:mb-0">
        {label}:
      </span>
      <div className="flex-1 flex items-center bg-gray-900 rounded-md p-2">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="bg-transparent text-blue-300 font-mono flex-1 outline-none"
        />
      </div>
    </div>
  );
};

const KeyValuePair = ({ label, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-700 pb-4">
      <span className="text-gray-400 font-medium w-full sm:w-1/3 mb-2 sm:mb-0">
        {label}:
      </span>
      <div className="flex-1 flex items-center bg-gray-900 rounded-md p-2">
        <input
          type="text"
          value={value}
          readOnly
          className="bg-transparent text-blue-300 font-mono flex-1 outline-none"
        />
        <button
          onClick={handleCopy}
          className="ml-2 text-gray-400 hover:text-white transition duration-300 focus:outline-none"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 1a2 2 0 00-2 2v1.586l-1.293 1.293a2 2 0 00-.293 2.828L8.586 8l.707-.707L10 7.586V3a2 2 0 00-2-2z" />
              <path d="M7.293 10.293a1 1 0 011.414 0L10 11.586l1.293-1.293a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" />
              <path fillRule="evenodd" d="M7 0a2 2 0 00-2 2v1h8V2a2 2 0 00-2-2H7z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Developers;
