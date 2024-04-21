import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import LandingPage from "./pages/LandingPage/LandingPage";
import { DashboardPage, DashboardPageGovernment } from "./pages/Dashboard/DashboardPage";


export default function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboardGovernment" element={<DashboardPageGovernment />} />
          </Routes>
        </Router>

      </ThemeProvider>
    </>
  );
}
