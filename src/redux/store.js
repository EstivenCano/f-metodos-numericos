import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./features/theme.slice";

const reducer = {
  theme: themeReducer,
};

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
