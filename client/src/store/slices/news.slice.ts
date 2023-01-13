import { createSlice } from "@reduxjs/toolkit";
import { IAddNews, INewsState } from "../../interfaces/news";

const initialState: INewsState = {
  data: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNews(state, { payload }: IAddNews) {
      state.data = payload;
    },
  },
});

export const { addNews } = newsSlice.actions;
export default newsSlice.reducer;
