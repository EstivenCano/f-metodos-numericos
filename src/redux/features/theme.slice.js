import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "lightTheme",
  },
  reducers: {},
});

export const themeReducer = themeSlice.reducer;

export const { toggleTheme } = themeSlice.actions;
