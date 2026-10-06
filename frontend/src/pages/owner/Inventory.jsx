function Inventory() {
  const inventory = [
    {
      name: "Gold",
      quantity: "0 grams",
      value: "₹0",
      icon: "🪙",
    },
    {
      name: "Silver",
      quantity: "0 grams",
      value: "₹0",
      icon: "🥈",
    },
  ];

  return (
    <div className="inventory-page">
      <div className="page-header">
        <div>
          <h1>Inventory</h1>
          <p>Manage your gold and silver stock.</p>
        </div>

        <button className="primary-button">
          + Add Stock
        </button>
      </div>

      <div className="inventory-grid">
        {inventory.map((item) => (
          <div className="inventory-card" key={item.name}>
            <div className="inventory-icon">
              {item.icon}
            </div>

            <div>
              <p className="inventory-label">{item.name} Stock</p>
              <h2>{item.quantity}</h2>
              <span>Stock Value: {item.value}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="inventory-section">
        <div className="section-header">
          <div>
            <h2>Stock Overview</h2>
            <p>Current inventory information</p>
          </div>
        </div>

        <div className="inventory-table-wrapper">
          <table className="inventory-table">
            <thead>
              <tr>
                <th>Material</th>
                <th>Current Stock</th>
                <th>Stock Value</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Gold</td>
                <td>0 grams</td>
                <td>₹0</td>
                <td>
                  <span className="stock-status">
                    No Stock
                  </span>
                </td>
              </tr>

              <tr>
                <td>Silver</td>
                <td>0 grams</td>
                <td>₹0</td>
                <td>
                  <span className="stock-status">
                    No Stock
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="inventory-section">
        <div className="section-header">
          <div>
            <h2>Stock Management</h2>
            <p>Manage opening stock and view stock history.</p>
          </div>
        </div>

        <div className="management-grid">
          <button className="management-card">
            <span>📥</span>
            <div>
              <h3>Opening Stock</h3>
              <p>Set initial gold and silver stock.</p>
            </div>
          </button>

          <button className="management-card">
            <span>📊</span>
            <div>
              <h3>Stock History</h3>
              <p>View previous stock movements.</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inventory;