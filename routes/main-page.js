const express = require('express');
const router = express.Router();

const db = require('../db/models');
const { Movie, User } = db;
const { asyncHandler, csrfProtection } = require('./utils.js');



router.get('/', asyncHandler(async (req, res) => {
    console.log('before query')
    const movies = await Movie.findAll(
        // {
        // where: { title, totalRating }}
    );

    // const movies = await User.findAll()
    // console.log(movies, 'this is a console log')


    res.render('main-page', { movies });
}));

module.exports = router;
