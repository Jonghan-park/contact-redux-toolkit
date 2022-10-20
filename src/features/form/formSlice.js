import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  phone: "",
  image: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {},
});

export default formSlice.reducer;
