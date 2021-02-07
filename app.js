const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const usersRouter = require('./routes/users');
const mainRouter = require('./routes/main-page')
const { restoreUser, requireAuth } = require('./auth');
const movieRouter = require('./routes/movies')
const reviewRouter = require('./routes/reviews')
const myMoviesRouter = require('./routes/my-movies')

const app = express();

// view engine setup
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set up session middleware
const store = new SequelizeStore({ db: sequelize });

app.use(
    session({
        secret: 'superSecret',
        store,
        saveUninitialized: false,
        resave: false,
    })
);

// create Session table if it doesn't already exist
store.sync();

// checks if peoples are logged in or nah
app.use(restoreUser);
// consider using the requireAuth as middleware over here
// app.use('/', indexRouter);
app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/movies', movieRouter)
app.use('/reviews', reviewRouter)
app.use(requireAuth)
app.use('/my-movies', myMoviesRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
