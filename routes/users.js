const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const csrf = require('csurf')
const { check, validationResult } = require('express-validator')


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
  const { 
    firstName,
    lastName,
    dateOfBirth,
    password,
    email
   } = req.body
   const user = db.User.build({
     firstName,
     lastName,
     dateOfBirth,
     password,
     email
   })
}))

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
