// store.js

import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./path/to/userSlice";
// Import your userSlice (replace "path/to" with the actual path)
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer, // Add other reducers here if needed
  },
});

export default store;
