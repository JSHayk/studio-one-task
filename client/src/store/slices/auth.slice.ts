import { createSlice } from "@reduxjs/toolkit";
import { IAddUser, IAuthState } from "../../interfaces/auth";

const initialState: IAuthState = {
  isLoged: false,
  data: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser(state, { payload }: IAddUser) {
      const { data, token } = payload;
      const { _id, is_online, username } = data;
      state.data = {
        _id,
        is_online,
        username,
      };
      localStorage.setItem("token", token);
      localStorage.setItem("data", JSON.stringify(data));
      state.isLoged = true;
    },
    login(state) {
      state.isLoged = true;
      state.data = JSON.parse(localStorage.getItem("data")!);
    },
    logout(state) {
      state.isLoged = false;
      state.data = null;
      localStorage.clear();
    },
  },
});

export const { addUser, login, logout } = authSlice.actions;
export default authSlice.reducer;
