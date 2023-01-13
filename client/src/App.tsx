import { memo } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default memo(App);
