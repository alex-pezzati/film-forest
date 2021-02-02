const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));

// set up session middleware
app.use(
  session({
    secret: 'superSecret',
    saveUninitialized: false,
    resave: false,
  })
);

app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

/*
sessionCookie: id34
const sessionId = cookies.sessionCookie
req.session = sessionStore[sessionId]
*/
// session store
/*
{ubduwue74374: {id: 7, username: 'billy'}, idhhfidifj2: {id: 2, username: 'alice'}}
*/

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
