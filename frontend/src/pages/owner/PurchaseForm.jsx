import { useState } from "react";

function PurchaseForm() {
  const [material, setMaterial] = useState("Gold");

  const [formData, setFormData] = useState({
    supplier: "",
    invoiceNumber: "",
    purchaseDate: "",
    quantity: "",
    purity: "",
    rate: "",
    totalAmount: "",
    paymentMethod: "Cash",
  });
  const handleChange = (e) => {
  const { name, value } = e.target;

  const updatedData = {
    ...formData,
    [name]: value,
  };

  if (name === "quantity" || name === "rate") {
    const quantity =
      name === "quantity"
        ? Number(value)
        : Number(formData.quantity);

    const rate =
      name === "rate"
        ? Number(value)
        : Number(formData.rate);

    if (quantity && rate) {
      updatedData.totalAmount = quantity * rate;
    } else {
      updatedData.totalAmount = "";
    }
  }

  setFormData(updatedData);
};

  const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !formData.supplier ||
    !formData.invoiceNumber ||
    !formData.purchaseDate ||
    !formData.quantity ||
    !formData.purity ||
    !formData.rate
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  console.log({
    material,
    ...formData,
  });

  alert(`${material} purchase saved successfully!`);
};

  return (
    <div className="purchase-form-page">
      <div className="page-header">
        <div>
          <h1>New Purchase</h1>
          <p>Record a new gold or silver purchase.</p>
        </div>
      </div>

      <form
        className="purchase-form-card"
        onSubmit={handleSubmit}
      >
        <div className="form-section">
          <h2>Purchase Details</h2>
          <p>Enter the basic purchase information.</p>

          <div className="form-grid">
            <div className="form-group">
              <label>Material</label>

              <select
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
              >
                <option value="Gold">Gold</option>
                <option value="Silver">Silver</option>
              </select>
            </div>

            <div className="form-group">
              <label>Supplier</label>

            <input
                type="number"
                name="totalAmount"
                placeholder="Calculated automatically"
                value={formData.totalAmount}
                readOnly
            />
            </div>

            <div className="form-group">
              <label>Invoice Number</label>

              <input
                type="text"
                name="invoiceNumber"
                placeholder="Enter invoice number"
                value={formData.invoiceNumber}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="purchaseDate">Purchase Date</label>

              <input
                id="purchaseDate"
                type="date"
                name="purchaseDate"
                value={formData.purchaseDate}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Material Information</h2>
          <p>Enter quantity, purity and rate.</p>

          <div className="form-grid">
            <div className="form-group">
              <label>Quantity</label>

              <input
                type="number"
                name="quantity"
                placeholder="Enter quantity in grams"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Purity</label>

              <input
                type="text"
                name="purity"
                placeholder={
                  material === "Gold"
                    ? "Example: 22K"
                    : "Example: 99.9%"
                }
                value={formData.purity}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Rate per Gram</label>

              <input
                type="number"
                name="rate"
                placeholder="Enter rate"
                value={formData.rate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Total Amount</label>

              <input
                type="number"
                name="totalAmount"
                placeholder="Enter total amount"
                value={formData.totalAmount}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Payment</h2>
          <p>Select how the supplier was paid.</p>

          <div className="form-group payment-group">
            <label>Payment Method</label>

            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="Cash">Cash</option>
              <option value="UPI">UPI</option>
              <option value="Bank Transfer">
                Bank Transfer
              </option>
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="secondary-button"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="primary-button"
          >
            Save Purchase
          </button>
        </div>
      </form>
    </div>
  );
}

export default PurchaseForm;