interface IRouter {
  HOME: string;
  LOGIN: string;
  LOGOUT: string;
  REGISTER: string;
  NEWS: string;
  NEWS_SPECIFIC: string;
  KEYWORDS: string;
  PROFILE: string;
  NOT_FOUND: string;
}

const Router: IRouter = {
  HOME: "/",
  LOGIN: "/login",
  LOGOUT: "/logout",
  REGISTER: "/register",
  NEWS: "/news",
  NEWS_SPECIFIC: "/news/:id",
  KEYWORDS: "/news/keywords",
  PROFILE: "/profile",
  NOT_FOUND: "*",
};

export default Router;
