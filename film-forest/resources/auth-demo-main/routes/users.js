const express = require('express');
const csrf = require('csurf');
const { User } = require('../db/models');
const router = express.Router();
const bcrypt = require('bcryptjs');

const csrfProtection = csrf({ cookie: true });
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

// 1. GET route that renders a register form
router.get(
  '/register',
  csrfProtection,
  asyncHandler(async (req, res) => {
    res.render('register', { csrfToken: req.csrfToken() });
  })
);
// 2. POST route to register a new user
router.post(
  '/',
  csrfProtection,
  asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = await User.create({ username, email, hashedPassword });
    req.session.user = { id: user.id, username: username };
    res.redirect('/');
  })
);
// 3. GET route that renders a login form
router.get('/login', csrfProtection, (req, res) => {
  res.render('login', { csrfToken: req.csrfToken() });
});
// 4. POST route to handle user login
router.post(
  '/login',
  csrfProtection,
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
    const isPassword = await bcrypt.compare(password, user.hashedPassword);
    if (isPassword) {
      // log user in
      console.log('session before login', req.session);
      req.session.user = { id: user.id, username: user.username };
      console.log('session after login', req.session);
      // redirect to index
      res.redirect('/');
    } else {
      res.render('login', { csrfToken: req.csrfToken(), errors: ['Invalid credentials, try again!'] });
    }
  })
);

router.post('/logout', (req, res) => {
  req.session.user = null;
  res.redirect('/');
});
module.exports = router;
