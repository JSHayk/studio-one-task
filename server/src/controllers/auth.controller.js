import authService from "../services/auth.service.js";
import config from "../config/config.js";

const {
  cookiesConfig: { max_age, httpOnly },
} = config;

const authController = {
  async register(req, res) {
    const { username, password } = req.body;
    try {
      const { sc, ms } = await authService.register(username, password);
      res.status(sc).send({ ms });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async login(req, res) {
    const { username, password } = req.body;
    try {
      const { sc, ms, data } = await authService.login(username, password);
      if (sc === 200) {
        res.cookie("token", data?.token, {
          maxAge: max_age,
          httpOnly,
        });
      }
      res.status(sc).send(data || { ms });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  logout(req, res) {
    res.clearCookie("token");
    res.status(200).send({ sc: "You have been logouted!" });
  },
};

export default Object.freeze(authController);
