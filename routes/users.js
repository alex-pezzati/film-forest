const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const csrf = require('csurf')
const db = require('../db/models')
const { check, validationResult } = require('express-validator')
const { loginUser, logoutUser } = require('../auth')

const csrfProtection = csrf({ cookie: true })
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next)

router.get('/user/register', csrfProtection, (req, res) => {
    const user = db.User.build()
    res.render('user-register', {
        title: 'Register',
        user,
        csrfToken: req.csrfToken()
    })
})

const userValidators = []

router.post('/user/register', csrfProtection, userValidators, asyncHandler(async(req, res) => {
    const { firstName, lastName, dateOfBirth, password, email } = req.body;

    const user = db.User.build({ firstName, lastName, dateOfBirth, email });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        const hashedPassword = await bcrypt.hash(password, 10);
        user.hashedPassword = hashedPassword;
        await user.save();
        loginUser(req, res, user);
        res.redirect('/'); //! WE DONT HAVE A HOME YET
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('user-register', {
            title: 'Register',
            user,
            errors,
            csrfToken: req.csrfToken()
        })
    }
}))

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;