import { createSlice } from "@reduxjs/toolkit";
import { IGeneralState } from "../../interfaces/general";

const initialState: IGeneralState = {
  isLoading: true,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    loaded(state) {
      state.isLoading = false;
    },
    unloaded(state) {
      state.isLoading = true;
    },
  },
});

export const { loaded, unloaded } = generalSlice.actions;
export default generalSlice.reducer;
