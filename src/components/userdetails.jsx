import React from "react";
import { User, Mail, AtSign, MapPin, Wallet, Key, Link } from "lucide-react"; // Importing icon components

const UserDetailsPage = ({ user }) => {
  // Component to display individual user detail items
  const DetailItem = ({ label, value, icon: Icon }) => (
    <div className="bg-gray-700 rounded-lg shadow-md p-4 flex items-center space-x-4 hover:bg-gray-750 transition-colors duration-200">
      <div className="bg-indigo-900 p-3 rounded-full">
        <Icon className="text-indigo-300 w-6 h-6" /> {/* Rendering the icon */}
      </div>
      <div>
        <dt className="text-sm font-medium text-gray-400">{label}</dt>{" "}
        {/* Label for the detail */}
        <dd className="mt-1 text-lg font-semibold text-white">{value}</dd>{" "}
        {/* Value for the detail */}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-700 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 shadow-lg rounded-2xl overflow-hidden">
          <div className="px-6 py-8 sm:px-8">
            <h3 className="text-3xl font-bold text-white mb-2">User Details</h3>
            <p className="text-indigo-200">Personal and account information</p>
          </div>
          <div className="border-t border-gray-700 px-6 py-8 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Rendering each detail item with corresponding icon and value */}
              <DetailItem label="Full name" value={user.name} icon={User} />
              <DetailItem
                label="Email address"
                value={user.email}
                icon={Mail}
              />
              <DetailItem
                label="Username"
                value={user.username}
                icon={AtSign}
              />
              <DetailItem label="Country" value={user.country} icon={MapPin} />
              <DetailItem
                label="Wallet address balance"
                value={user.wallet_address_balance}
                icon={Wallet}
              />
              <DetailItem
                label="Wallet address"
                value={user.wallet_address}
                icon={Wallet}
              />
              <DetailItem
                label="Onsite wallet balance"
                value={user.onsite_wallet_balance}
                icon={Wallet}
              />
              <DetailItem
                label="Onsite wallet address"
                value={user.onsite_wallet_address}
                icon={Wallet}
              />
              <DetailItem label="API key" value={user.api_key} icon={Key} />
              <DetailItem label="Webhook" value={user.webhook} icon={Link} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage; // Exporting the UserDetailsPage component
