import { configureStore } from "@reduxjs/toolkit";
import unPaidInvoiceSlice from "../utils/userSlice"

const store = configureStore({
  reducer: {
    unpaid: unPaidInvoiceSlice,
  }
})

export default store