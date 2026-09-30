import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import OwnerLogin from "./pages/owner/OwnerLogin";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;