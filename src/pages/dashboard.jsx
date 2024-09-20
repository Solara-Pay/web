import React from "react";
import { User, Wallet, CreditCard } from "lucide-react";

const CustomerCard = ({ name, balance, walletAddress }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col space-y-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full">
    <div className="flex items-center space-x-4">
      <div className="bg-indigo-600 p-3 rounded-full">
        <User className="h-6 w-6 text-white" />
      </div>
      <h2 className="text-xl font-semibold text-white">{name}</h2>
    </div>
    <div className="flex items-center space-x-4">
      <div className="bg-green-600 p-3 rounded-full">
        <CreditCard className="h-6 w-6 text-white" />
      </div>
      <div>
        <p className="text-gray-400 text-sm">Balance</p>
        <p className="text-white font-bold">${balance.toFixed(2)}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="bg-purple-600 p-3 rounded-full">
        <Wallet className="h-6 w-6 text-white" />
      </div>
      <div>
        <p className="text-gray-400 text-sm">Wallet Address</p>
        <p className="text-white font-medium truncate">{walletAddress}</p>
      </div>
    </div>
  </div>
);

const CustomerInfoCards = () => {
  const customers = [
    {
      name: "Alice Johnson",
      balance: 5230.5,
      walletAddress: "0x1234567890123456789012345678901234567890",
    },
  ];

  return (
    <div className="flex justify-center p-6">
      {customers.map((customer, index) => (
        <div key={index} className="w-4/5 md:w-[90%] max-w-4xl">
          <CustomerCard {...customer} />
        </div>
      ))}
    </div>
  );
};

export default CustomerInfoCards;
