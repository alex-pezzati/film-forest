const express = require('express')
const { Movie, Review, Vote, User } = require('../db/models')
const { asyncHandler, csrfProtection } = require('./utils.js');
const router = express.Router()

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const movieId = req.params.id
    const movie = await Movie.findByPk( movieId )
    res.render('review', { movie })
}))


router.post('/:id(\\d+)', asyncHandler(async (req, res)=> {
    const movieId = req.params.id;
    const review = req.body;

    await Review.create({
        userId: res.locals.user.id,
        review: review.review,
        movieId
    });

    res.redirect(`/movies/${movieId}`);
}));


module.exports = router
