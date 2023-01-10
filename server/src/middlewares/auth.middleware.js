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
    if (!validations.checkUsernameValidation(username)) {
      return res.status(422).send({ ms: "Invalid username!" });
    }
    if (!validations.checkPasswordValidation(password)) {
      return res.status(422).send({ ms: "Invalid password!" });
    }
    next();
  },
};

export default authMiddleware;
