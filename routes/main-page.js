const express = require('express');
const router = express.Router();

const db = require('../db/models');
const { Movie, User } = db;
const { asyncHandler, csrfProtection } = require('./utils.js');


router.get('/', csrfProtection, asyncHandler(async(req, res) => {
    console.log('before query')
    const movies = await Movie.findAll({
        limit: 5
    });
    res.render('main-page', {
        movies,
        csrfToken: req.csrfToken(),
    });
}));

module.exports = router;