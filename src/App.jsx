import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import SigninPage from "./pages/signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
