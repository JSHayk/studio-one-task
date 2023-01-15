const newsMiddleware = {
  checkNewsBody(req, res, next) {
    const { keywords } = req.body;
    if (!keywords) return res.status(422).send({ ms: "The keywords must be!" });
    next();
  },
  checkNewsValidations(req, res, next) {
    const { keywords } = req.body;
    console.log(typeof keywords, "keywords");
    if (typeof keywords !== "string") {
      return res.status(422).send({ ms: "The keywords must be string!" });
    }
    if (!keywords.trim()) {
      return res.status(422).send({ ms: "The keywords can't be empty!" });
    }
    next();
  },
};

export default newsMiddleware;
