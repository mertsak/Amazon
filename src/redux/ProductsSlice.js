import { createSlice } from "@reduxjs/toolkit";

import ProductsData1 from "./ProductsData1";
import ProductsData2 from "./ProductsData2";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products1: ProductsData1,
    products2: ProductsData2,
    basket: [],
    user: null,
  },
  reducers: {
    addBasket: (state, action) => {
      const itemInBasket = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (itemInBasket) {
        itemInBasket.quantity++;
      } else {
        state.basket.push({ ...action.payload, quantity: 1 });
      }
      // state.basket = [...state.basket, action.payload];
    },
    incrementQuantity: (state, action) => {
      const item = state.basket.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.basket.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeBasket: (state, action) => {
      const id = action.payload;
      const filtered = state.basket.filter((item) => item.id !== id);
      state.basket = filtered;
    },
    setUser: (state, action) => {
      state.user = [...state, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addBasket,
  removeBasket,
  totalQuantity,
  incrementQuantity,
  decrementQuantity,
  setUser,
} = productsSlice.actions;

export default productsSlice.reducer;
