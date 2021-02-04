const express = require('express')
const { Movie, Review, Vote, User  } = require('../db/models')

const { asyncHandler, csrfProtection } = require('./utils.js');
const router = express.Router()

// router.get('/', asyncHandler(async (req, res) => {
//     const movies = await db.Movie.findAll({ order: ['title'] })
//     res.render('movie-list', { title: 'Movies', movies })
// }))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const movieId = req.params.id
    const movie = await Movie.findByPk( movieId, { include: [ Review ] })
    const reviews = movie.Reviews
    // console.log(User)
    
    res.render('movie', { title: movie.title, movie, reviews })
}))


router.post('/:id(\\d+)', asyncHandler(async (req, res)=> {
    const movieId = req.params.id
    const review = req.body
    await Review.create({
    userId: 1,
    review: review.review,
    movieId
    })
    res.redirect(`/movies/${movieId}`)
}))



module.exports = router