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
      state.total = 0;
    },
    recoverContact: (state) => {
      state.contacts = contactData;
    },
    removeContact: (state, action) => {
      const contactId = action.payload;
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== contactId
      );
      state.total = state.contacts.length;
    },
  },
});

export const { clearContact, recoverContact, removeContact } =
  contactSlice.actions;

export default contactSlice.reducer;
