const { Router } = require("express");
const { check } = require("express-validator");
const fieldValidator = require("../middleware/fieldValidator");
const {
  getMovies,
  addMovie,
  deleteMovie,
  updateMovie,
} = require("../controllers/moviesController");

const movies = Router();

movies.get("/", getMovies);
movies.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("director", "Director is required").not().isEmpty(),
    check("clasification", "Clasification is required").not().isEmpty(),
    fieldValidator
  ],
  addMovie
);
movies.put("/:id", updateMovie);
movies.delete("/:id", deleteMovie);

module.exports = movies;
