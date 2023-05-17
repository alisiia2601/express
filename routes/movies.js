const express = require('express');
const router = express.Router();
const mockData = require('../mockData');

router.get('/', (req, res) => {
  res.json(mockData);
});

router.get('/:id', (req, res) => {
  const movieId = req.params.id;
  const movie = mockData.find((movie) => movie.imdbID === movieId);
  
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: 'Movie was not found' });
  }
});

router.post('/', (req, res) => {
  const newMovie = req.body.movie;
  mockData.push(newMovie);
  res.status(201).json(newMovie);
});

router.put('/:id', (req, res) => {
  const movieId = req.params.id;
  const updatedMovie = req.body.movie;
  const index = mockData.findIndex((movie) => movie.imdbID === movieId);
  
  if (index !== -1) {
    mockData[index] = updatedMovie;
    res.json(updatedMovie);
  } else {
    res.status(404).json({ error: 'Movie was not found' });
  }
});

router.delete('/:id', (req, res) => {
  const movieId = req.params.id;
  const index = mockData.findIndex((movie) => movie.imdbID === movieId);
  
  if (index !== -1) {
    const deletedMovie = mockData.splice(index, 1)[0];
    res.json(deletedMovie);
  } else {
    res.status(404).json({ error: 'Movie was not found' });
  }
});

module.exports = router;
