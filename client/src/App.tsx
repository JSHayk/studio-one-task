import { memo, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useAppDispatch } from "./hooks/useRedux";
import { login } from "./store/slices/auth.slice";
import AppRouter from "./router/AppRouter";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(login());
    }
  }, []);
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default memo(App);
