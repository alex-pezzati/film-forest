const express = require('express')
const { Movie, Review, Vote, User, Sequelize } = require('../db/models')
const { asyncHandler, csrfProtection } = require('./utils.js');
const router = express.Router()

router.get('/', asyncHandler(async(req, res) => {
    const movies = await Movie.findAll({
        order: [[ 'title' ]]
    })

    res.render('my-movies', { movies })
}))





module.exports = router
