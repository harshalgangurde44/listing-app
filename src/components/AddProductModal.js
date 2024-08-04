import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./AddProductmodal.css"; // Assume this CSS file styles the modal

const productsList = [
  "Pipes",
  "Tubing",
  "Pipe Fittings",
  "Flanges",
  "Valves",
  "Bars",
  "Bolts",
  "Channels",
];

const materialsList = [
  "Alloy Steel",
  "Aluminum",
  "Carbon Steel",
  "Copper Nickel",
  "Incoloy",
  "Inconel",
  "Monel",
  "Stainless Steel",
  "Titanium",
];

const getRandomGrade = (product, material) => {
  const randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random alphabet
  const randomNumber = Math.floor(Math.random() * 90 + 10); // Random two-digit number
  return `${product} ${randomChar}${randomNumber} ${material}`;
};

const AddProductModal = ({ onSave, onClose }) => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [generatedGrade, setGeneratedGrade] = useState("");

  useEffect(() => {
    if (selectedProduct && selectedMaterial) {
      setGeneratedGrade(getRandomGrade(selectedProduct, selectedMaterial));
    }
  }, [selectedProduct, selectedMaterial]);

  const handleSave = () => {
    onSave({
      id: Date.now(), // Temporary unique ID
      name: generatedGrade,
      material: selectedMaterial,
      grade: generatedGrade,
      unitLength: "",
      shape: "",
      price: "",
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Product</h2>
        <div className="form-group">
          <label>Product:</label>
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            <option value="">Select a product</option>
            {productsList.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Material:</label>
          <select
            value={selectedMaterial}
            onChange={(e) => setSelectedMaterial(e.target.value)}
          >
            <option value="">Select a material</option>
            {materialsList.map((material) => (
              <option key={material} value={material}>
                {material}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Generated Grade:</label>
          <input type="text" value={generatedGrade} readOnly />
        </div>
        <div className="modal-buttons">
          <button
            onClick={handleSave}
            disabled={!selectedProduct || !selectedMaterial}
          >
            Save
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

AddProductModal.propTypes = {
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddProductModal;
