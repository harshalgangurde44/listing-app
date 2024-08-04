import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style1.css"; // You can style the modal here

const QuickEdit = ({ product, onSave, onClose }) => {
  const [editDetails, setEditDetails] = useState({
    title: product.name || "",
    material: product.material || "",
    unitLength: product.unitLength || "",
    shape: product.shape || "",
    price: product.price || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave({ ...product, ...editDetails });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Product Details</h2>

        <div className="form-group">
          <label>
            Material:
            <input
              type="text"
              name="material"
              value={editDetails.material}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Unit Length:
            <input
              type="text"
              name="unitLength"
              value={editDetails.unitLength}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Shape:
            <input
              type="text"
              name="shape"
              value={editDetails.shape}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Price:
            <input
              type="text"
              name="price"
              value={editDetails.price}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="modal-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

QuickEdit.propTypes = {
  product: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default QuickEdit;
