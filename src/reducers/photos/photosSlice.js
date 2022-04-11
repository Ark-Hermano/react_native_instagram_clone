import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // { id: "1", source: {}},
];

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    photoAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { photoAdded } = photosSlice.actions;

export default photosSlice.reducer;