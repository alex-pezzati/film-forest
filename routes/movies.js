const express = require('express')
const { Movie, Review, Dashboard, MoviesDashboard, Vote, User, Sequelize  } = require('../db/models')
const { asyncHandler, csrfProtection } = require('./utils.js');
const router = express.Router()


router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    let movieId = req.params.id
    const movie = await Movie.findByPk( movieId, { include:  Review })
    const reviews = movie.Reviews

    const dashboards = await Dashboard.findAll({
        where: {
            userId: res.locals.user.id
        }
    });

    if(reviews.length === 0) {
        res.render('movie', { dashboards, movie })
    } else {
        const users = await User.findAll()

        res.render('movie', { title: movie.title, dashboards, movie, reviews, users })
    }
}))

router.post('/:id(\\d+)', asyncHandler(async (req, res) => {
    const movieId = req.params.id;

    await MoviesDashboard.create({
        dashboardId: req.body.dashboardId,
        movieId: req.params.id
    });

    res.redirect(`/movies/${movieId}`);
}));


module.exports = router
