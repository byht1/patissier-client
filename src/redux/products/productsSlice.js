import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: { favoriteProducts: [] },
  reducers: {
    addToFavorite: (state, action) => {
      console.log(action.payload);
      // if (!action.payload.some(item => state.favoriteProducts.includes(item))) {
      //   state.favoriteProducts.push(...action.payload);
      // }
      // state.favoriteProducts.push(...action.payload);
      if (!state.favoriteProducts.includes(action.payload)) {
        state.favoriteProducts.push(action.payload);
      }
    },
    removeFromFavorite: (state, action) => {
      state.favoriteProducts.splice(
        state.favoriteProducts.indexOf(action.payload),
        1
      );
    },
  },
});

export const { addToFavorite, removeFromFavorite } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
