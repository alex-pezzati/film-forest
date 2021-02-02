Users table info -
* Id serial PK unique notnull
* firstName - text(50) notnull
* lastName - text(50) notnull
* hashedPassword - string.binary notnull
* emailAddress - text(50) notnull CHECK (emailAddress = *@*)
* dateOfBirth - date notnull
    * Associations - a user hasMany votes, hasMany reviews, a user hasOne dashboard

Dashboards table info -
* Id serial PK unique notnull
* name text(50)
* userId references model: users
* movieId references model: movies
    * Associations - a dashboard has many moviesDashboards, a dashboard belongsTo a user

`JOIN TABLE` Votes table info -
* Id serial PK unique notnull
* upvoteRating - boolean
* downvoteRating - boolean
* userId references model: users
* movieId references model: movies
    * Associations a vote hasOne movie, belongsTo one user

Movie table info -
* Id serial  PK unique notnull
* title - text(50) notnull
* genre - text(20) notnull
* releaseDate - date notnull
* description - text(500) notnull
* totalRating - integer notnull
* userId references model: users
* reviewId references model: reviews
   * Associations - hasMany reviews, hasMany votes, hasMany moviesDashboards

`JOIN TABLE` Reviews table info -
* Id serial PK unique notnull
* review - text(500) notnull
* userId references model: users
* movieId references mode: movies
  *  Associations - a review belongsTo a user, a review hasOne movie

`JOIN TABLE` MoviesDashboards table info -
* dashboardId references model: dashboards
* moviesId references model: movies
  * Associations - belongsTo movies, belongsTo dashboards
