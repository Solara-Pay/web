import React, { useState } from "react";

const Developers = () => {
  const [activeTab, setActiveTab] = useState("apikeys");

  return (
    <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">
        Developers Dashboard
      </h1>

      <div className="flex space-x-4 mb-8">
        <TabButton
          active={activeTab === "apikeys"}
          onClick={() => setActiveTab("apikeys")}
        >
          API Keys
        </TabButton>
        <TabButton
          active={activeTab === "webhooks"}
          onClick={() => setActiveTab("webhooks")}
        >
          Webhooks
        </TabButton>
      </div>

      {activeTab === "apikeys" ? <ApiKeys /> : <Webhooks />}
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

const ApiKeys = () => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-2xl">
      <h2 className="text-2xl font-semibold mb-6 text-blue-400">API Keys</h2>
      <div className="space-y-4">
        <KeyValuePair label="API Key" value="a1b2c3d4e5f6g7h8i9j0" />
        {/* <KeyValuePair label="Secret Key" value="z9y8x7w6v5u4t3s2r1q0" /> */}
      </div>
      <div className="mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300">
          Generate New Keys
        </button>
      </div>
    </div>
  );
};

const Webhooks = () => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-2xl">
      <h2 className="text-2xl font-semibold mb-6 text-blue-400">Webhooks</h2>
      <div className="space-y-4">
        <KeyValuePair
          label="Transaction Completion"
          value="https://api.example.com/webhooks/transactions"
        />
        {/* <KeyValuePair
          label="Refund Completion"
          value="https://api.example.com/webhooks/refunds"
        /> */}
      </div>
      <div className="mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300">
          Update Webhook URLs
        </button>
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
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
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
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Developers;
