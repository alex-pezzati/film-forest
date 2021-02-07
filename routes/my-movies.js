const express = require('express')
const { Dashboard, Movie, MoviesDashboard, Review, Vote, User } = require('../db/models');
const { asyncHandler, csrfProtection } = require('./utils.js');
const router = express.Router()

// router.get('/', asyncHandler(async (req, res) => {
//     const movies = await Movie.findAll({
//         order: [[ 'title' ]]
//     });

//     res.render('my-movies', { movies });
// }));

router.get('/', asyncHandler(async (req, res) => {
    const userId = res.locals.user.id;

    // by default grab 'My Movies' user dashboard
    const myDashboards = await Dashboard.findAll({
        where: {
            userId,
            name: 'My Movies'
        }
    });

    const dashboardId = myDashboards[0].id;

    const myDashboardMovies = await MoviesDashboard.findAll({
        where: {
            dashboardId
        }
    })

    const movies = await Movie.findAll();


    console.log(myDashboards, 'MY DASHBOARD OBJECT?!!!?!?!?!?')
    console.log(myDashboardMovies, 'MY DASHBORD OVIES OBJECT?!!!?!?!?!?')
    // console.log(movies, 'ANOTHER OBJECT????')
    // console.log(myDashboards[0].Movie, 'MOVIE OBJECT?!!!?!?!?!?')


    res.render('my-movies', { myDashboardMovies, movies });
}));




router.post('/:id(\\d+)', asyncHandler(async (req, res) => {
    const movieId = req.params.id;
    // const dashboardId = req.body;

    // console.log('IM INSIDE THIS POST!!!!!!!!!!!!!!!!!!')
    // console.log(movieId)
    // console.log(req.body.dashboardId)

    try {
        await MoviesDashboard.create({
            dashboardId: req.body.dashboardId,
            movieId: req.params.id
        });
    } catch (e) {
        console.error(e)
    }

    res.redirect(`/movies/${movieId}`);
}));


module.exports = router
