import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./features/contact/contactSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    modal: modalReducer,
  },
});
