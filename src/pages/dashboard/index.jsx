import React from "react";
import { Navigate } from "react-router";

function DashboardPage() {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/signin" replace={true} />;
  return <div>DashboardPage</div>;
}

export default DashboardPage;
