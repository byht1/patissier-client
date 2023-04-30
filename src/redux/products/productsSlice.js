import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteProducts: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favoritesList.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favoritesList = state.favoritesList.filter(
        item => item.id !== action.payload.id
      );
    },
  },
});

export const { addFavorite, removeFavorite } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
