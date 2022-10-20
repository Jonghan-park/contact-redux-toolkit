import { createSlice } from "@reduxjs/toolkit";
import contactData from "../../contactData";

const initialState = {
  contacts: contactData,
  total: contactData.length,
  name: "",
  phone: "",
  image: "",
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
    addContact: (state, action) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.image = action.payload.image;
      state.contacts.push({
        id: state.contacts.length + 1,
        name: state.name,
        phone: state.phone,
        image: state.image,
      });
    },
  },
});

export const { clearContact, recoverContact, removeContact, addContact } =
  contactSlice.actions;

export default contactSlice.reducer;
