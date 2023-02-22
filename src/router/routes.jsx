import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../components/pages/landingPage";
import { RegisterPage } from "../components/pages/registerPage";
import { DashboardPage } from "../components/pages/dashboardPage";
import { ProtectedRoutes } from "../components/pages/ProtectedRoutes";
import { TechProvider } from "../Providers/TechContext";

export const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route
          index
          element={
            <TechProvider>
              <DashboardPage />
            </TechProvider>
          }
        />
      </Route>
    </Routes>
  );
};
