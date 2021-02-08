const express = require('express')
const { Dashboard, Movie, MoviesDashboard, Review, Vote, User } = require('../db/models');
const { asyncHandler, csrfProtection } = require('./utils.js');
const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    // by default grab 'My Movies' user dashboard
    const myDashboards = await Dashboard.findAll({
        userId: res.locals.user.id
    });

    const dashboardId = [ myDashboards[0].id, myDashboards[1].id, myDashboards[2].id];

    console.log(dashboardId, 'THIS SHOULD BE AN ARRAY')

    const myDashboardMovies = await MoviesDashboard.findAll({
        where: {
            dashboardId: dashboardId,
        }
    });

    const movies = await Movie.findAll();

    res.render('my-movies', { myDashboards, myDashboardMovies, movies });
}));


router.get('/to-watch', asyncHandler(async (req, res) => {
    const myDashboards = await Dashboard.findAll({
        where: {
            userId: res.locals.user.id,
            name: 'To Watch'
        }
    });

    const dashboardId = myDashboards[0].id;

    const myDashboardMovies = await MoviesDashboard.findAll({
        where: {
            dashboardId
        }
    })

    const movies = await Movie.findAll();

    res.render('my-movies', { myDashboards, myDashboardMovies, movies });
}));

router.get('/watched', asyncHandler(async (req, res) => {
    const myDashboards = await Dashboard.findAll({
        where: {
            userId: res.locals.user.id,
            name: 'Have Watched'
        }
    });

    const dashboardId = myDashboards[0].id;

    const myDashboardMovies = await MoviesDashboard.findAll({
        where: {
            dashboardId
        }
    });

    const movies = await Movie.findAll();

    res.render('my-movies', { myDashboards, myDashboardMovies, movies });
}));



router.post('/:id(\\d+)', asyncHandler(async (req, res) => {
    const movieId = req.params.id;

    await MoviesDashboard.create({
        dashboardId: req.body.dashboardId,
        movieId: req.params.id
    });

    res.redirect(`/my-movies`);
}));



router.post('/delete/:dashboardId(\\d+)/:movieId(\\d+)', asyncHandler(async (req, res) => {
    await MoviesDashboard.destroy({
        where: {
            movieId: req.params.movieId,
            dashboardId: req.params.dashboardId
        }
    });

    res.redirect('/my-movies');
}));

router.post('/to-watch/delete/:dashboardId(\\d+)/:movieId(\\d+)', asyncHandler(async (req, res) => {
    await MoviesDashboard.destroy({
        where: {
            movieId: req.params.movieId,
            dashboardId: req.params.dashboardId
        }
    });

    res.redirect('/my-movies/to-watch');

}));

router.post('/watched/delete/:dashboardId(\\d+)/:movieId(\\d+)', asyncHandler(async (req, res) => {
    await MoviesDashboard.destroy({
        where: {
            movieId: req.params.movieId,
            dashboardId: req.params.dashboardId
        }
    });

    res.redirect('/movies/watched');
}));


module.exports = router
