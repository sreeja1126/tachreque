import { useNavigate } from "react-router-dom";
function Purchases() {
  const navigate = useNavigate();
  const purchases = [
    {
      invoice: "PUR-001",
      supplier: "ABC Gold Traders",
      material: "Gold",
      quantity: "0 grams",
      purity: "24K",
      amount: "₹0",
      payment: "Cash",
    },
    {
      invoice: "PUR-002",
      supplier: "Silver Palace",
      material: "Silver",
      quantity: "0 grams",
      purity: "99.9%",
      amount: "₹0",
      payment: "Online",
    },
  ];

  return (
    <div className="purchases-page">
      <div className="page-header">
        <div>
          <h1>Purchases</h1>
          <p>Manage gold and silver purchase invoices.</p>
        </div>

        <button
         className="primary-button"
         onClick={() => navigate("/owner/purchases/new")}
        >
        + New Purchase
        </button>
      </div>

      <div className="purchase-cards">
        <div className="purchase-summary-card">
          <span className="purchase-card-icon">🪙</span>

          <div>
            <p>Gold Purchases</p>
            <h2>₹0</h2>
            <span>0 grams purchased</span>
          </div>
        </div>

        <div className="purchase-summary-card">
          <span className="purchase-card-icon">🥈</span>

          <div>
            <p>Silver Purchases</p>
            <h2>₹0</h2>
            <span>0 grams purchased</span>
          </div>
        </div>

        <div className="purchase-summary-card">
          <span className="purchase-card-icon">🧾</span>

          <div>
            <p>Total Purchases</p>
            <h2>₹0</h2>
            <span>0 purchase invoices</span>
          </div>
        </div>
      </div>

      <div className="purchases-section">
        <div className="section-header">
          <div>
            <h2>Purchase History</h2>
            <p>View previous gold and silver purchase invoices.</p>
          </div>
        </div>

        <div className="purchase-table-wrapper">
          <table className="purchase-table">
            <thead>
              <tr>
                <th>Invoice</th>
                <th>Supplier</th>
                <th>Material</th>
                <th>Quantity</th>
                <th>Purity</th>
                <th>Amount</th>
                <th>Payment</th>
              </tr>
            </thead>

            <tbody>
              {purchases.map((purchase) => (
                <tr key={purchase.invoice}>
                  <td>{purchase.invoice}</td>
                  <td>{purchase.supplier}</td>
                  <td>{purchase.material}</td>
                  <td>{purchase.quantity}</td>
                  <td>{purchase.purity}</td>
                  <td>{purchase.amount}</td>
                  <td>
                    <span className="payment-status">
                      {purchase.payment}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="purchases-section">
        <div className="section-header">
          <div>
            <h2>Purchase Management</h2>
            <p>Create and manage purchase records.</p>
          </div>
        </div>

        <div className="purchase-management-grid">
          <button className="management-card">
            <span>🪙</span>

            <div>
              <h3>Gold Purchase</h3>
              <p>Record a new gold purchase invoice.</p>
            </div>
          </button>

          <button className="management-card">
            <span>🥈</span>

            <div>
              <h3>Silver Purchase</h3>
              <p>Record a new silver purchase invoice.</p>
            </div>
          </button>

          <button className="management-card">
            <span>📋</span>

            <div>
              <h3>Purchase History</h3>
              <p>View all previous purchase records.</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Purchases;