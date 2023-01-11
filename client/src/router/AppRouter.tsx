import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Router from "../const/router";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={Router.HOME} element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;
