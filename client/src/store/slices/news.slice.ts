import { createSlice } from "@reduxjs/toolkit";
import { IAddNews, IAddSpecificNews, INewsState } from "../../interfaces/news";

const initialState: INewsState = {
  data: null,
  specificData: null,
  isEdit: false,
  isLoading: true,
  isSpecificLoading: true,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNews(state, { payload }: IAddNews) {
      state.data = payload;
      state.isLoading = false;
      state.isSpecificLoading = true;
    },
    addSpecificNews(state, { payload }: IAddSpecificNews) {
      state.specificData = {
        ...payload,
      };
      state.isSpecificLoading = false;
    },
    activateEdit(state) {
      state.isEdit = true;
    },
    cancelEdit(state) {
      state.isEdit = false;
    },
  },
});

export const { addNews, addSpecificNews, activateEdit, cancelEdit } =
  newsSlice.actions;
export default newsSlice.reducer;
