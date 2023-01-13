import { createSlice } from "@reduxjs/toolkit";
import {
  IAddNews,
  IAddSpecificNews,
  INewsState,
} from "../../interfaces/news";

const initialState: INewsState = {
  data: null,
  specificData: null,
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
  },
});

export const { addNews, addSpecificNews } = newsSlice.actions;
export default newsSlice.reducer;
