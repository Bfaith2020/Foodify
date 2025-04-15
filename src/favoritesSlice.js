import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: JSON.parse(localStorage.getItem('foodifyFavorites')) || [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const newFavorites = [...state.favorites, action.payload];
      localStorage.setItem('foodifyFavorites', JSON.stringify(newFavorites));
      state.favorites = newFavorites;
    },
    removeFavorite: (state, action) => {
      const idToRemove = action.payload;
      const updatedFavorites = state.favorites.filter(recipe => recipe.id !== idToRemove);
      localStorage.setItem('foodifyFavorites', JSON.stringify(updatedFavorites));
      state.favorites = updatedFavorites;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;