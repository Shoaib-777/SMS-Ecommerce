import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem("AddProduct")) || [],
  itemsw: JSON.parse(localStorage.getItem("AddWishlist")) || [],
  likes: JSON.parse(localStorage.getItem("Likes")) || {}
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    add: (state, action) => {
      const itemExists = state.items.some(item => item.id === action.payload.id);
      if (!itemExists) {
        state.items.push({ ...action.payload, quantity: 1 });
        localStorage.setItem("AddProduct", JSON.stringify(state.items));
      }
    },
    remove: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem("AddProduct", JSON.stringify(state.items));
    },
    addw: (state, action) => {
      const itemExists = state.itemsw.some(item => item.id === action.payload.id);
      if (!itemExists) {
        state.itemsw.push({ ...action.payload });
        localStorage.setItem("AddWishlist", JSON.stringify(state.itemsw));
      }
    },
    removew: (state, action) => {
      state.itemsw = state.itemsw.filter(item => item.id !== action.payload);
      localStorage.setItem("AddWishlist", JSON.stringify(state.itemsw));
    },
    toggleLike: (state, action) => {
      const productId = action.payload;
      if (state.likes[productId]) {
        delete state.likes[productId];
      } else {
        state.likes[productId] = true;
      }
      localStorage.setItem("Likes", JSON.stringify(state.likes));
    },
  },
});

export const { increment, decrement, add, remove, addw, removew, toggleLike } = counterSlice.actions;

export default counterSlice.reducer;
