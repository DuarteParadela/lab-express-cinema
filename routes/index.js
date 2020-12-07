const express = require("express");
const MovieModel = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", async (req, res, next) => {
  try {
    const allMovies = await MovieModel.find();
    res.render("movies", { allMovies });
  } catch (err) {
    next(err);
  }
});

router.get("/movieDetails/:id", async (req, res, next) => {
  try {
    const movieDet = await MovieModel.findById(req.params.id);
    res.render("movieDetails", { movieDet });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
