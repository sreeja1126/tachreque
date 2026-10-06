function OwnerDashboard() {
  const stats = [
    {
      title: "Gold Stock",
      value: "0 grams",
      icon: "🪙",
    },
    {
      title: "Silver Stock",
      value: "0 grams",
      icon: "🥈",
    },
    {
      title: "Today's Sales",
      value: "₹0",
      icon: "💰",
    },
    {
      title: "Today's Purchases",
      value: "₹0",
      icon: "🛒",
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, Owner!</p>
        </div>

        <div className="dashboard-date">
          <span>Today</span>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.title}>
            <div className="stat-icon">{stat.icon}</div>

            <div className="stat-info">
              <p>{stat.title}</p>
              <h2>{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-section">
        <div className="section-header">
          <div>
            <h2>Quick Overview</h2>
            <p>Your jewellery business at a glance</p>
          </div>
        </div>

        <div className="overview-card">
          <div>
            <span className="overview-label">Gold & Silver Prices</span>
            <h3>Today's Market Prices</h3>
            <p>
              Live gold and silver prices will appear here once connected
              to the backend.
            </p>
          </div>

          <button className="view-button">
            View Prices
          </button>
        </div>
      </div>
    </div>
  );
}

export default OwnerDashboard;