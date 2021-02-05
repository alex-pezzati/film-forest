const express = require('express')
const { Movie, Review, Vote, User, Sequelize  } = require('../db/models')
const { asyncHandler, csrfProtection } = require('./utils.js');
const router = express.Router()


router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const movieId = req.params.id
    const movie = await Movie.findByPk( movieId, { include:  Review })
    const reviews = movie.Reviews

    if(reviews.length === 0) {
        res.render('movie', { movie })
    } else {
        const users = await User.findAll()

        res.render('movie', { title: movie.title, movie, reviews, users })
    }
}))


module.exports = router
