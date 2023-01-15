import { memo, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import { $GetNews } from "./api";
// Store
import { login } from "./store/slices/auth.slice";
import { addNews } from "./store/slices/news.slice";
import { loaded } from "./store/slices/general.slice";
import AppRouter from "./router/AppRouter";
import Loader from "./components/Loader";

const App = () => {
  const isLoading = useAppSelector((state) => state.general.isLoading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(login());
    }
  }, [dispatch]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const news = await $GetNews();
        dispatch(addNews(news));
        dispatch(loaded());
      } catch (err: any) {
        throw new Error(err);
      }
    };
    getNews();
  }, [dispatch]);

  return (
    <BrowserRouter>{isLoading ? <Loader /> : <AppRouter />}</BrowserRouter>
  );
};

export default memo(App);
