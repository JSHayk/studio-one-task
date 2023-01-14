import { createSlice } from "@reduxjs/toolkit";
import { IAddNews, IAddSpecificNews, INewsState } from "../../interfaces/news";

const initialState: INewsState = {
  data: null,
  specificData: null,
  isEdit: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNews(state, { payload }: IAddNews) {
      state.data = payload;
    },
    addSpecificNews(state, { payload }: IAddSpecificNews) {
      state.specificData = {
        ...payload,
      };
    },
    activateEdit(state) {
      state.isEdit = true;
    },
    disableEdit(state) {
      state.isEdit = false;
    },
  },
});

export const { addNews, addSpecificNews, activateEdit, disableEdit } =
  newsSlice.actions;
export default newsSlice.reducer;
