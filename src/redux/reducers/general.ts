import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState: any = {
  loading: true,
  moreLoading: false,
  images: [],
};

export const generalSlice = createSlice({
  name: "generalSlice",
  initialState,
  reducers: {
    getImages: (state, action) => {
      state.moreLoading = true;
    },
    updateImages: (state, action) => {
      state.moreLoading = false;
      state.loading = false;
      state.images = [...state.images, ...action.payload];
    },
  },
});

export const { getImages, updateImages } = generalSlice.actions;
