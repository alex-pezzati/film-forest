// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs')
// const db = require('../db/models')

// const { check, validationResult } = require('express-validator')
// const { loginUser, logoutUser } = require('../auth');
// const { asyncHandler, csrfProtection } = require('./utils.js');

// router.get('/', csrfProtection, (req, res) => {
//     if (res.locals.authenticated === true) {
//         res.redirect('/dashboard')
//     } else {
//         res.render('user-register', {
//             title: 'Login',
//             csrfToken: req.csrfToken(),
//         })
//     }
// })

// const loginValidators = [
//     check('email')
//     .exists({ checkFalsy: true })
//     .withMessage('Please provide a value for Email Address'),
//     check('password')
//     .exists({ checkFalsy: true })
//     .withMessage('Please provide a value for Password'),
// ];

// router.post('/', csrfProtection, loginValidators, asyncHandler(async(req, res) => {
//     const { email, password } = req.body

//     let errors = []
//     const validatorErrors = validationResult(req);

//     if (validatorErrors.isEmpty()) {
//         const user = await db.User.findOne({ where: { email } });

//         if (user !== null) {
//             const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

//             if (passwordMatch) {
//                 loginUser(req, res, user);
//                 return req.session.save(() => { res.redirect('/') });
//             }
//         }
//         errors.push('Login failed, please check credentials')
//     } else {
//         errors = validatorErrors.array().map((error) => error.msg);
//     }
//     res.render('user-login', {
//         title: 'Login',
//         email,
//         errors,
//         csrfToken: req.csrfToken(),
//     });

// }))

// module.exports = router;