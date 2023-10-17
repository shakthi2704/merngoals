import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./auth/authSlice.js"
import goalReducer from "./goals/goalSlice.js"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
  },
})
