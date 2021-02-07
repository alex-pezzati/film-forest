const express = require('express')
const { Dashboard, Movie, MoviesDashboard, Review, Vote, User } = require('../db/models');
const { asyncHandler, csrfProtection } = require('./utils.js');
const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const movies = await Movie.findAll({
        order: [[ 'title' ]]
    });

    res.render('my-movies', { movies });
}));


router.post('/:id(\\d+)', asyncHandler(async (req, res) => {
    const movieId = req.params.id;
    // const dashboardId = req.body;
    // const userId = res.locals.user.id;

        console.log('IM INSIDE THIS POST!!!!!!!!!!!!!!!!!!')
        console.log(movieId)
        console.log(req.body.dashboardId)

    await MoviesDashboard.create({
        dashboardId: req.body.dashboardId,
        movieId: req.params.id
    });
    // console.log(userId)

    res.redirect(`/movies/${movieId}`);
}));


module.exports = router
