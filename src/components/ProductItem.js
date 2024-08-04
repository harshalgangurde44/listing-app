import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../store/productSlice";
import QuickEdit from "./QuickEdit";

const ProductItem = ({ product, onSelect }) => {
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  const handleQuickEdit = (updatedProduct) => {
    dispatch(updateProduct(updatedProduct));
    setIsEditing(false);
  };

  return (
    <div>
      <input type="checkbox" onChange={() => onSelect(product.id)} />
      <span>{product.name}</span>
      <button onClick={() => setIsEditing(!isEditing)}>Quick Edit</button>
      {isEditing && <QuickEdit product={product} onSave={handleQuickEdit} />}
    </div>
  );
};

export default ProductItem;
