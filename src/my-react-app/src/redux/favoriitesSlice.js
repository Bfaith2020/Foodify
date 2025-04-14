import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: JSON.parse(localStorage.getItem('foodifyFavorites')) || [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
      localStorage.setItem('foodifyFavorites', JSON.stringify(state.favorites));
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(fav => fav.id !== action.payload);
      localStorage.setItem('foodifyFavorites', JSON.stringify(state.favorites));
    },
  },
});

export const { setFavorites, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;