import React from "react";
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

// Sample data for the chart, representing revenue and transactions for each month
const data = [
  { name: "Jan", revenue: 4000, transactions: 2400 },
  { name: "Feb", revenue: 3000, transactions: 1398 },
  { name: "Mar", revenue: 2000, transactions: 9800 },
  { name: "Apr", revenue: 2780, transactions: 3908 },
  { name: "May", revenue: 1890, transactions: 4800 },
  { name: "Jun", revenue: 2390, transactions: 3800 },
];

// Dashboard component to display the overall statistics
const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <h1 className="mb-6 text-gray-200 text-3xl font-semibold">Dashboard</h1>

      {/* Statistics cards for displaying key metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {[
          { title: "Total Revenue", value: "$24,000", color: "text-green-400" },
          {
            title: "Total Transactions",
            value: "1,200",
            color: "text-blue-400",
          },
          {
            title: "Pending Transactions",
            value: "50",
            color: "text-yellow-400",
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
      <div className="bg-gray-800 shadow-lg rounded-lg p-4">
        <h2 className="mb-4 text-gray-200">Revenue vs Transactions</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            {/* Grid lines for better readability */}
            <CartesianGrid strokeDasharray="3 3" stroke="#718096" />
            {/* X-axis for the months */}
            <XAxis dataKey="name" stroke="#4a5568" />
            {/* Y-axis for revenue */}
            <YAxis yAxisId="left" orientation="left" stroke="#4a5568" />
            {/* Y-axis for transactions */}
            <YAxis yAxisId="right" orientation="right" stroke="#4a5568" />
            {/* Tooltip for displaying data on hover */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#f7fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "4px",
              }}
            />
            {/* Legend to identify bars */}
            <Legend wrapperStyle={{ color: "#4a5568" }} />
            {/* Bar for revenue data */}
            <Bar
              yAxisId="left"
              dataKey="revenue"
              fill="#4299e1"
              name="Revenue"
            />
            {/* Bar for transaction data */}
            <Bar
              yAxisId="right"
              dataKey="transactions"
              fill="#48bb78"
              name="Transactions"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
