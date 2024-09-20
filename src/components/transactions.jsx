import React, { useState } from "react";
import { ArrowUpDown, Check, AlertTriangle } from "lucide-react";

const TransactionTable = ({ transactions }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (sortConfig.key === null) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (sortConfig.key === "created_at") {
      return sortConfig.direction === "asc"
        ? new Date(aValue) - new Date(bValue)
        : new Date(bValue) - new Date(aValue);
    }

    if (sortConfig.key === "amount" || sortConfig.key === "info") {
      const aAmount =
        sortConfig.key === "info" ? JSON.parse(a.info).fee : aValue;
      const bAmount =
        sortConfig.key === "info" ? JSON.parse(b.info).fee : bValue;
      return sortConfig.direction === "asc"
        ? aAmount - bAmount
        : bAmount - aAmount;
    }

    if (aValue < bValue) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-8 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-700">
        <h2 className="text-xl font-bold text-gray-100">Transaction Details</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-300">
          <thead className="text-xs uppercase bg-gray-700 text-gray-300">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 font-medium cursor-pointer"
                onClick={() => handleSort("id")}
              >
                ID <ArrowUpDown className="inline-block w-4 h-4 ml-1" />
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-medium text-right cursor-pointer"
                onClick={() => handleSort("amount")}
              >
                Amount <ArrowUpDown className="inline-block w-4 h-4 ml-1" />
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-medium text-right cursor-pointer"
                onClick={() => handleSort("info")}
              >
                Fee <ArrowUpDown className="inline-block w-4 h-4 ml-1" />
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-medium text-right cursor-pointer"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-medium text-right cursor-pointer"
                onClick={() => handleSort("created_at")}
              >
                Date <ArrowUpDown className="inline-block w-4 h-4 ml-1" />
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.map((transaction, index) => (
              <tr
                key={transaction.id}
                className={
                  index % 2 === 0
                    ? "bg-gray-800"
                    : "bg-gray-750 hover:bg-gray-700 transition-colors duration-200"
                }
              >
                <td className="px-6 py-4 font-medium text-gray-100">
                  {transaction.id}
                </td>
                <td className="px-6 py-4 text-right">{transaction.amount}</td>
                <td className="px-6 py-4 text-right">
                  {JSON.parse(transaction.info).fee / 1000000} SOL
                </td>
                <td className="px-6 py-4 text-right">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      transaction.remark === "CONFIRMED"
                        ? "bg-green-900 text-green-300"
                        : "bg-yellow-900 text-yellow-300"
                    }`}
                  >
                    {transaction.remark === "CONFIRMED" ? (
                      <Check className="w-3 h-3 mr-1" />
                    ) : (
                      <AlertTriangle className="w-3 h-3 mr-1" />
                    )}
                    {transaction.remark}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  {formatDate(transaction.created_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
