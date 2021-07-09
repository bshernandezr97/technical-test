const { Router } = require("express");
const { check } = require("express-validator");
const fieldValidator = require("../middleware/fieldValidator");
const {
  addClasification,
  deleteClasification,
  getClasifications,
  updateClasification,
} = require("../controllers/clasificationController");
const clasificationRouter = Router();

clasificationRouter.get("/", getClasifications);
clasificationRouter.post(
  "/",
  [check("name", "Name is required").not().isEmpty(), fieldValidator],
  addClasification
);
clasificationRouter.put("/:id", updateClasification);
clasificationRouter.delete("/:id", deleteClasification);

module.exports = clasificationRouter;
