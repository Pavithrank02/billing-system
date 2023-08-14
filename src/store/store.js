import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
  }
})

export default store