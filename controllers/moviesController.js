const Movie = require('../models/Movie');
const { response } = require('express');

const addMovie = async (req, res = response) => {
  try {
    const movie = await Movie.create({ ...req.body });
    return res.status(201).json({
      ok: true,
      ...movie._doc,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      ok: false,
      message: 'Something went wrong, please communicate with the admin.',
    });
  }
};

const updateMovie = async (req, res = response) => {
  try {
    let movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(400).json({
        ok: false,
        message: 'Movie id does not exists',
      });
    }
    movie = await Movie.findByIdAndUpdate(
      req.params.id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );
    return res.status(200).json({
      ok: true,
      ...movie._doc,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      ok: false,
      message: 'Something went wrong, please communicate with the admin.',
    });
  }
};

const deleteMovie = async (req, res = response) => {
  try {
    let movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(400).json({
        ok: false,
        message: 'Movie id does not exists',
      });
    }
    movie = await Movie.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      ok: true,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      ok: false,
      message: 'Something went wrong, please communicate with the admin.',
    });
  }
};

const getMovies = async (req, res = response) => {
  try {
    let movies = await Movie.find({}).populate('clasification');
    res.status(200).json({
      ok: true,
      ...movies,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      ok: false,
      message: 'Something went wrong, please communicate with the admin.',
    });
  }
};

module.exports = {
  addMovie,
  updateMovie,
  deleteMovie,
  getMovies,
};
