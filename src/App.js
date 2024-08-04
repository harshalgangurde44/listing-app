import React, { useState } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./store";
import ProductList from "./components/ProductList";
import AddProductModal from "./components/AddProductModal";
import { addProduct } from "./store/productSlice"; // Import the addProduct action

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAddProduct = (newProduct) => {
    dispatch(addProduct(newProduct));
    setIsModalOpen(false);
  };
  return (
    <Provider store={store}>
      <div>
        <button className="add" onClick={() => setIsModalOpen(true)}>
          Add Products
        </button>
        {isModalOpen && (
          <AddProductModal
            onSave={handleAddProduct}
            onClose={() => setIsModalOpen(false)}
          />
        )}
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
