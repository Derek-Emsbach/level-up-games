# API-Routes

This web app uses the following API routes to dynamically update the page to create a single-page-app-like feel for the user for specific features.

## Users
* A logged in user can create, view, or edit their profile.

  * `GET /api/users` | Get a list of all users.
  * `GET /api/users/:id` | Get user by ID.
  * `POST /api/users` | Create a new user.
  * `PUT /api/users/:id` | Update user by ID.
  * `DELETE /api/users/:id` | Delete user by ID.

## Games
* A logged in user can create, view, edit or delete their game


  * `POST /api/games` | Create a new game.
  * `GET /api/games/:id` | Get game by ID.
  * `PUT /api/games/:id` | Update game by ID.
  * `DELETE /api/games/:id` | Delete game by ID.

## Reviews
* A logged in user can get all reviews
* A logged in user can get all reviews by genre
* A logged in user can create, view, edit or delete their review.

  * `GET /api/reviews` | Get a list of all reviews.
  * `GET /api/reviews/:id` | Get review by ID.
  * `GET /api/reviews/:genre` | Get a list of all reviews.
  * `POST /api/reviews` | Create a new review.
  * `PUT /api/reviews/:id` | Update review by ID.
  * `DELETE /api/reviews/:id` | Delete review by ID.

## Comments
* A logged in user can create, view, edit or delete their comment.

  * `GET /api/comments` | Get a list of all comments.
  * `GET /api/comments/:id` | Get comment by ID.
  * `POST /api/comments` | Create a new comment.
  * `PUT /api/comments/:id` | Update comment by ID.
  * `DELETE /api/comments/:id` | Delete comment by ID.

## Games Lists
* A logged in user can create, view, edit or delete their list.

  * `GET /api/lists/:id` | Get games list by ID.
  * `POST /api/lists` | Create a new games list.
  * `PUT /api/lists/:id` | Update games list by ID.
  * `DELETE /api/lists/:id` | Delete games list by ID.

# Bonus Features

## Friends
* A logged in user can get a list of all friends
* A logged in user can create, view or delete their friends.

  * `GET /api/friends` | Get a list of all friends.
  * `GET /api/friends/:id` | Get friend by ID.
  * `POST /api/friends` | Create a new friend.
  * `DELETE /api/friends/:id` | Delete friend by ID.

## Searches
* A logged in user can create a search

  * `GET /api/searches` | Get a list of all searches.
  * `GET /api/searches/:id` | Get search by ID.
  * `POST /api/searches` | Create a new search.
  * `PUT /api/searches/:id` | Update search by ID.
  * `DELETE /api/searches/:id` | Delete search by ID.
