const express = require('express')
const { Movie, Review, Vote, User, Sequelize  } = require('../db/models')
const { asyncHandler, csrfProtection } = require('./utils.js');
const router = express.Router()
const Op = Sequelize.Op

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const movieId = req.params.id
    const movie = await Movie.findByPk( movieId, { include:  Review  })
    const reviews = movie.Reviews
    console.log(reviews, "this is the reviews obj")
    if(reviews.length === 0) {
        res.render('movie', { movie })
        } else {
    const userReview = await Review.findAll({ 
            where: {
                movieId: {
                    [Op.eq] : movieId  
                }
            }, include: [ User ] })
            console.log(userReview, 'this is the user review')
            const userId = userReview[0].userId
            res.render('movie', { title: movie.title, movie, reviews, userId })
    }
}))


// router.post('/reviews/:id(\\d+)', asyncHandler(async (req, res)=> {
//     const movieId = req.params.id
//     const review = req.body
//         await Review.create({
//             userId: 1,
//             review: review.review,
//             movieId
//         })
//         console.log(review, 'this is the review')
//         res.redirect(`/movies/${movieId}`)

// }))


module.exports = router