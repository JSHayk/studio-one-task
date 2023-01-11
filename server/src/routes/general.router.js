import express from "express";

const router = express();
router.get("*", notFound);
router.post("*", notFound);
router.put("*", notFound);
router.patch("*", notFound);
router.delete("*", notFound);

function notFound(req, res) {
  res.status(404).send("Not Found");
}

export default router;
