import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFilter,
  setSelectedProducts,
  selectedProducts,
} from "../store/productSlice";
import ProductTable from "./ProductTable";
import "./style.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const filters = useSelector((state) => state.product.filters);
  const selectedProducts = useSelector(
    (state) => state.product.selectedProducts
  );

  const filteredProducts = products.filter(
    (product) =>
      (filters.product ? product.name.includes(filters.product) : true) &&
      (filters.material ? product.material.includes(filters.material) : true)
  );

  const handleSelect = (id) => {
    dispatch(
      setSelectedProducts(
        selectedProducts.includes(id)
          ? selectedProducts.filter((prodId) => prodId !== id)
          : [...selectedProducts, id]
      )
    );
  };

  return (
    <div className="list-content">
      <h1>Product List</h1>
      <div>
        <label>Filter by Product:</label>
        <input
          type="text"
          value={filters.product}
          onChange={(e) => dispatch(setFilter({ product: e.target.value }))}
        />
        <label>Filter by Material:</label>
        <input
          type="text"
          value={filters.material}
          onChange={(e) => dispatch(setFilter({ material: e.target.value }))}
        />
      </div>
      <div>
        <ProductTable
          products={filteredProducts}
          selectedProducts={selectedProducts}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
};

export default ProductList;
