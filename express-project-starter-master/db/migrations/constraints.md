User table info -
* firstName - text(50) notnull
* lastName - text(50) notnull
* dateOfBirth - text(50) notnull
* emailAddress - text(50) notnull CHECK (emailAddress = *@*)
    * Associations - a user hasMany movies, hasMany reviews, belongsTo a dashboard


Movie table info -
* title - text(50) notnull
* genre - text(20) notnull
* releaseDate - text(50) notnull
* description - text(500) notnull
* totalRating - integer notnull
* movieUpvote - boolean notnull
* movieDownvote - boolean notnull
* userId references model: users
* reviewId references model: reviews
   * associations - a movie hasMany users, hasMany reviews

Review table info -
* reviewBody - text(500) notnull
* reviewUpvote - boolean
* reveiwDownvote - boolean
* userId references model: users
  *  associations - a review belongsTo a user

`JOIN TABLE` Watch table info -
* wantToWatch - boolean
* haveWatched - boolean
* unreviewed - boolean
* userId references model: users
* movieId references model: movies
    * associations a watchTable has many movies, hasMany users, hasMany dashboards


Dashboard table info -
* userId references model: users
* movieId references model: movies
