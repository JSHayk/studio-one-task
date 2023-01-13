interface IRouter {
  HOME: string;
  LOGIN: string;
  REGISTER: string;
  NEWS: string;
}

const Router: IRouter = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  NEWS: "/news",
};

export default Router;
