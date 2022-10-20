import { createSlice } from "@reduxjs/toolkit";
import contactData from "../../contactData";

const initialState = {
  contacts: contactData,
  total: contactData.length,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    clearContact: (state) => {
      state.contacts = [];
    },
    recoverContact: (state) => {
      state.contacts = contactData;
    },
  },
});

export const { clearContact, recoverContact } = contactSlice.actions;

export default contactSlice.reducer;
