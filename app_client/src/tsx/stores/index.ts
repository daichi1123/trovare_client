import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import userReducer from "./slices/userSlice"
export const store = configureStore ({
  reducer: {
    // storeに登録完了 redux dev toolsで登録されているかの確認が可能
    auth: authReducer,
    user: userReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;