import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../components/pages/landingPage";
import { RegisterPage } from "../components/pages/registerPage";
import { DashboardPage } from "../components/pages/dashboardPage";

export const RoutesPage = ({ userLogin, setUserLogin, userLogOut }) => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage setUserLogin={setUserLogin} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <DashboardPage userLogin={userLogin} userLogOut={userLogOut} />
        }
      />
    </Routes>
  );
};
