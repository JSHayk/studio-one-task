import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import Router from "../const/router";
// Pages
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NewsSpecific from "../components/NewsSpecific";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={Router.HOME} element={<HomePage />} />
      <Route path={Router.REGISTER} element={<RegisterPage />} />
      <Route path={Router.LOGIN} element={<LoginPage />} />
      <Route path={Router.NEWS_SPECIFIC} element={<NewsSpecific />} />
    </Routes>
  );
};

export default memo(AppRouter);
