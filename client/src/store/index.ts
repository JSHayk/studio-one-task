import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
// Slices
import authReducer from "./slices/auth.slice";
import newsReducer from "./slices/news.slice";
import generalReducer from "./slices/general.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    general: generalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
