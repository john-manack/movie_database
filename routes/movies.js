'use strict';

const express = require('express'),
    router = express.Router();

const movieList = require('../db1')

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: "List of movies",
            data: movieList,
        },
        partials: {
            body: "partials/movie-list",
        }
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params; // DECONSTRUCTING
    const movie = movieList.find((movie) => {
        if (movie.imdbID === id) {
            return movie;
        }
    });
    if (movie) {
        res.render('template', {
            locals: {
                title: `${movie.name}`,
                movie
            },
            partials: {
                body: 'partials/movie-detail'
            }
        })
    } else{
        res.status(404).send(`No movie found that matches the ID, ${id}`)
    }
})

module.exports = router;