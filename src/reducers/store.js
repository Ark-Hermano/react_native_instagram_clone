import { configureStore } from "@reduxjs/toolkit";
import photosSlice from "./photos/photosSlice";

export default configureStore({
  reducer: {
    users: photosSlice,
  },
});