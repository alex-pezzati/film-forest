User table info -
* Id serial notnull PK unique
* firstName - text(50) notnull
* lastName - text(50) notnull
* dateOfBirth - text(50) notnull
* emailAddress - text(50) notnull CHECK (emailAddress = *@*)
    * Associations - a user hasMany movies, hasMany reviews, belongsTo a dashboard

Dashboard table info -
* Id serial notnull PK unique
* name
* wantToWatch - boolean
* haveWatched - boolean
* unreviewed - boolean
* userId references model: users
*   movieId references model: movies
* $1, wantToWatch, $1

`JOIN TABLE` Watch table info -
* Id serial notnull PK unique
* review
* dashboardId references model: users
* movieId references model: movies
    * associations a watchTable has many movies, hasMany dashboards

PK  Dashboard   Movie
$1, $1,         $1
$2, $1,         $2

  example query
select movie
from watchtable
where dashboard = 1


Movie table info -
* Id serial notnull PK unique
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
* Id serial notnull PK unique
* reviewBody - text(500) notnull
* reviewUpvote - boolean
* reveiwDownvote - boolean
* userId references model: users
  *  associations - a review belongsTo a user
