/**
 * App.jsx - Main component with routing
 * Uses layout routes for cleaner organization.
 * - RootLayout for landing page (/)
 * - PageLayout wrapper for all other routes
 */

import { useEffect } from "react";
import { useNavigate, Routes, Route, Outlet } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import PageLayout from "./layouts/PageLayout";
import RootLayout from "./layouts/RootLayout";
import { layoutRoutes } from "./routes/routeConfig";
import { useCursorEnlargeOnClick } from "./hooks";
import "./styles/App.scss";

function App() {
  const navigate = useNavigate();

  useCursorEnlargeOnClick();

  // Handle GitHub Pages SPA routing redirect
  useEffect(() => {
    const redirect = sessionStorage.getItem("redirect");
    if (redirect) {
      sessionStorage.removeItem("redirect");
      navigate("/" + redirect, { replace: true });
    }
  }, [navigate]);

  return (
    <ErrorBoundary>
      <Routes>
        {/* Landing page route */}
        <Route path="/" element={<RootLayout />} />

        {/* Layout routes - all wrapped with PageLayout */}
        <Route element={<PageLayout><Outlet /></PageLayout>}>
          {layoutRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
