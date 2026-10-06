import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import OwnerLogin from "./pages/owner/OwnerLogin";
import OwnerDashboard from "./pages/owner/OwnerDashboard";
import OwnerLayout from "./layouts/OwnerLayout";
import Inventory from "./pages/owner/Inventory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/owner/login" replace />}
        />

        <Route
          path="/owner/login"
          element={<OwnerLogin />}
        />

        <Route element={<OwnerLayout />}>
          <Route
            path="/owner/dashboard"
            element={<OwnerDashboard />}
          />
          <Route
            path="/owner/inventory"
            element={<Inventory />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;