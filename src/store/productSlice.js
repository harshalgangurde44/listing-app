import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Stainless Steel 304 Pipe",
      material: "Stainless Steel",
      unitLength: "6-12 meter",
      shape: "Round",
      price: "100 USD",
    },
    {
      id: 2,
      name: "Carbon Steel A105 Tubing",
      material: "Carbon Steel",
      unitLength: "6-12 meter",
      shape: "Round",
      price: "150 USD",
    },
    {
      id: 3,
      name: "Duplex Steel 2205 Flanges",
      material: "Duplex Steel",
      unitLength: "6-12 meter",
      shape: "Round",
      price: "200 USD",
    },
    {
      id: 4,
      name: "Hastelloy C22 Valves",
      material: "Hastelloy",
      unitLength: "6-12 meter",
      shape: "Round",
      price: "300 USD",
    },
    {
      id: 5,
      name: "Incoloy 800 Gasket",
      material: "Incoloy",
      unitLength: "6-12 meter",
      shape: "Round",
      price: "250 USD",
    },
    {
      id: 6,
      name: "Inconel 600 Instrumentation Fittings",
      material: "Inconel",
      unitLength: "6-12 meter",
      shape: "Round",
      price: "350 USD",
    },
    {
      id: 7,
      name: "Copper Nickel 90/10 Pipe Fittings",
      material: "Copper Nickel",
      unitLength: "6-12 meter",
      shape: "Round",
      price: "400 USD",
    },
    // Add more products as needed
  ],
  filters: {
    product: "",
    material: "",
  },
  selectedProducts: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    updateProduct(state, action) {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    setSelectedProducts(state, action) {
      state.selectedProducts = action.payload;
    },
    bulkUpdate(state, action) {
      state.products = state.products.map((product) =>
        state.selectedProducts.includes(product.id)
          ? { ...product, ...action.payload }
          : product
      );
    },
  },
});

export const {
  setFilter,
  addProduct,
  updateProduct,
  setSelectedProducts,
  bulkUpdate,
} = productSlice.actions;
export default productSlice.reducer;
