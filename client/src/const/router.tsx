interface IRouter {
  HOME: string;
  LOGIN: string;
  REGISTER: string;
  NEWS: string;
  NEWS_SPECIFIC: string
}

const Router: IRouter = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  NEWS: "/news",
  NEWS_SPECIFIC: "/news/:id"
};

export default Router;
