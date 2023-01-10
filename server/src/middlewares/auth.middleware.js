import validations from "../validations/index.js";

const authMiddleware = {
  checkAuthBody(req, res, next) {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(422).send({ ms: "The username and password must be!" });
    next();
  },
  checkAuthValidations(req, res, next) {
    const { username, password } = req.body;
    if (!validations.isUsernameValidated(username)) {
      return res.status(422).send({ ms: "Invalid username!" });
    }
    if (!validations.isPasswordValidated(password)) {
      return res.status(422).send({ ms: "Invalid password!" });
    }
    next();
  },
};

export default Object.freeze(authMiddleware);
