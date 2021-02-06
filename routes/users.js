const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const db = require('../db/models')

const { check, validationResult } = require('express-validator')
const { loginUser, logoutUser } = require('../auth');
const { asyncHandler, csrfProtection } = require('./utils.js');


router.get('/register', csrfProtection, (req, res) => {
    const user = db.User.build()
    if (res.locals.authenticated === true) {
        res.redirect('/my-movies')
    } else {
        res.render('user-register', {
            title: 'Register',
            user,
            csrfToken: req.csrfToken()
        })
    }
})

const userValidators = [
    check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for First Name')
    .isLength({ max: 50 })
    .withMessage('First Name must not be more than 50 characters long'),
    check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Last Name')
    .isLength({ max: 50 })
    .withMessage('Last Name must not be more than 50 characters long'),
    check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
        return db.User.findOne({ where: { email: value } })
            .then((user) => {
                if (user) {
                    return Promise.reject('The provided Email Address is already in use by another account');
                }
            });
    }),
    check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ min: 6 })
    .withMessage('Password must not be shorter than 6 characters long, ya jerk')
    .isLength({ max: 12 })
    .withMessage('Password must not be more than 12 characters long'),

    // implement this once we have legit seed users and feel like making real passwords, nah meen?
    // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    // .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
];

router.post('/register', csrfProtection, userValidators, asyncHandler(async(req, res) => {
    const { firstName, lastName, password, email } = req.body;

    const user = db.User.build({ firstName, lastName, email });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        const tempPassword = await bcrypt.hash(password, 10);
        user.hashedPassword = tempPassword;
        await user.save();
        loginUser(req, res, user);

        return req.session.save(() => {
            res.redirect('/my-movies');
        })

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

router.get('/login', csrfProtection, (req, res) => {
    if (res.locals.authenticated === true) {
        res.redirect('/my-movies')
    } else {
        res.render('user-login', {
            title: 'Login',
            csrfToken: req.csrfToken(),
        })
    }
})

const loginValidators = [
    check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
    check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];

router.post('/login', csrfProtection, loginValidators, asyncHandler(async(req, res) => {
    const { email, password } = req.body

    let errors = []
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        const user = await db.User.findOne({ where: { email } });

        if (user !== null) {
            const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

            if (passwordMatch) {
                loginUser(req, res, user);
                return req.session.save(() => { res.redirect('/my-movies') });
            }
        }
        errors.push('Login failed, please check credentials')
    } else {
        errors = validatorErrors.array().map((error) => error.msg);
    }
    res.render('user-login', {
        title: 'Login',
        email,
        errors,
        csrfToken: req.csrfToken(),
    });
}))


router.post('/demo', asyncHandler(async(req, res) => {
    console.log('DOES THIS WORK?')
    const demoUser = await db.User.findOne({ where: { email: 'demo@demo.com' } });
    loginUser(req, res, demoUser);
    return req.session.save((err) => {
        if (err) next(err);
        else res.redirect('/my-movies')
    })
}))

router.post('/logout', (req, res) => {
    console.log('WERE INSIDE THIS FUNCTION!!!!!!!!!!', req.session)
    logoutUser(req, res);
    res.redirect('/');
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
