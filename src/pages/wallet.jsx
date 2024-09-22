import React from "react";

const Wallet = () => {
  const walletAmount = 5000; // Example wallet amount
  const availableBalance = 3000; // Example available balance

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <h1 className="mb-6 text-gray-200 text-3xl font-semibold">Wallet</h1>

      <div className="flex justify-center">
        <div className="bg-gray-900 shadow-lg rounded-lg p-6 w-full max-w-md transform transition-transform hover:scale-105">
          <h2 className="mb-4 text-gray-200 text-xl">Wallet Overview</h2>
          <div className="mb-4">
            <h3 className="text-gray-400">Total Amount in Wallet</h3>
            <p className="text-2xl font-bold text-green-400">${walletAmount}</p>
          </div>
          <div>
            <h3 className="text-gray-400">Available Balance</h3>
            <p className="text-2xl font-bold text-blue-400">
              ${availableBalance}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
