import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateProduct } from "../store/productSlice";
import QuickEditModal from "./QuickEdit";
import "./style1.css"; // You can style the table here

const ProductTable = ({ products, selectedProducts, onSelect }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const dispatch = useDispatch();

  const handleQuickEdit = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
  };

  const handleSave = (updatedProduct) => {
    dispatch(updateProduct(updatedProduct));
    setIsEditing(false);
    setCurrentProduct(null);
  };

  const handleClose = () => {
    setIsEditing(false);
    setCurrentProduct(null);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Product</th>
            <th>Action</th>
            <th>Product Details</th>
            <th>Price per Unit</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => onSelect(product.id)}
                />
              </td>
              <td>{product.name}</td>
              <td>
                <button
                  className="quick"
                  onClick={() => handleQuickEdit(product)}
                >
                  Quick Edit | Add Details
                </button>
              </td>
              <td>
                Material: {product.material}, Unit Length: {product.unitLength},
                Shape: {product.shape}
              </td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditing && (
        <QuickEditModal
          product={currentProduct}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
  selectedProducts: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ProductTable;
