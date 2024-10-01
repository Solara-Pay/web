import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // Replace this with your actual authentication logic
  const isAuthenticated = localStorage.getItem('accessToken') !== null;

  // If not authenticated, redirect to the sign-in page
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  // If authenticated, allow access to the protected route
  return <Outlet />;
};

export default ProtectedRoute;
