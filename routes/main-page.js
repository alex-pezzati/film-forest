const express = require('express');
const router = express.Router();

const db = require('../db/models');
const { Movie, User } = db;
const { asyncHandler, csrfProtection } = require('./utils.js');


router.get('/', csrfProtection, asyncHandler(async(req, res) => {
    const moviesBest = await Movie.findAll({
        limit: 15,
        order: [[ 'totalRating', 'DESC' ]]
    });
    const moviesWorst = await Movie.findAll({
        limit: 15,
        order: [[ 'totalRating', 'ASC' ]]
    });
    res.render('main-page', {
        moviesBest,
        moviesWorst,
        csrfToken: req.csrfToken(),
    });
}));

module.exports = router;
