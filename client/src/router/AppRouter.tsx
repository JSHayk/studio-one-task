import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";
import Router from "../const/router";
// Pages
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import NewsSpecificPage from "../pages/NewsSpecificPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter = () => {
  const isLoged = useAppSelector((state) => state.auth.isLoged);
  return (
    <Routes>
      <Route path={Router.HOME} element={<HomePage />} />
      {!isLoged && (
        <>
          <Route path={Router.REGISTER} element={<RegisterPage />} />
          <Route path={Router.LOGIN} element={<LoginPage />} />
        </>
      )}
      <Route path={Router.NEWS_SPECIFIC} element={<NewsSpecificPage />} />
      {isLoged && <Route path={Router.PROFILE} element={<ProfilePage />} />}
      <Route path={Router.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};

export default memo(AppRouter);
