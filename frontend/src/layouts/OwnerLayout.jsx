import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function OwnerLayout() {
  return (
    <div className="owner-layout">
      <Sidebar />

      <main className="owner-content">
        <Outlet />
      </main>
    </div>
  );
}

export default OwnerLayout;