import validations from "../validations/index.js";

const generalMiddleware = {
  checkEmptyBody(req, res, next) {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({ ms: "The request body is empty" });
    }
    next();
  },
  checkIdParam(req, res, next) {
    const { id } = req.params;
    if (!validations.isIdValidated(id)) {
      return res.status(404).send({ ms: "Invalid Id!" });
    }
    next();
  },
};

export default Object.freeze(generalMiddleware);
