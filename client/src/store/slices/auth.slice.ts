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
    },
  },
});

export const { addUser } = authSlice.actions;
export default authSlice.reducer;
