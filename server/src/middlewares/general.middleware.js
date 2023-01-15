import validations from "../validations/index.js";

const generalMiddleware = {
  checkEmptyBody(req, res, next) {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({ ms: "The request body is empty" });
    }
    next();
  },
  checkIdParam(req, res, next) {
    let checked = true;
    Object.entries(req.params).forEach((item) => {
      const [key, value] = item;
      if (key.toLowerCase().includes("id")) {
        if (!validations.isIdValidated(value)) {
          checked = false;
        }
      }
    });
    if (!checked) {
      return res.status(404).send({ ms: "Invalid id!" });
    }
    next();
  },
};

export default Object.freeze(generalMiddleware);
