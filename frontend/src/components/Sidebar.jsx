import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/owner/dashboard", icon: "🏠" },
    { name: "Inventory", path: "/owner/inventory", icon: "📦" },
    { name: "Purchases", path: "/owner/purchases", icon: "🛒" },
    { name: "Sales", path: "/owner/sales", icon: "💰" },
    { name: "Bills", path: "/owner/bills", icon: "🧾" },
    { name: "Payments", path: "/owner/payments", icon: "💳" },
    { name: "Reports", path: "/owner/reports", icon: "📊" },
    {
      name: "Gold & Silver Prices",
      path: "/owner/prices",
      icon: "🪙",
    },
    { name: "Settings", path: "/owner/settings", icon: "⚙️" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h1>TACHREQUE</h1>
        <p>Jewellery Management</p>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`sidebar-link ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <button className="logout-button">
          ↪ Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;