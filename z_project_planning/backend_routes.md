# API-Routes

This web app uses the following API routes to dynamically update the page to create a single-page-app-like feel for the user for specific features.

## Users
* A logged in user can create, view, or edit their profile.

  * GET /users Get a list of all users.
  * GET /users/:id Get user by ID.
  * POST /users Create a new user.
  * PUT /users/:id Update user by ID.
  * DELETE /users/:id Delete user by ID.

## Games
* A logged in user can create, view, edit or delete their game


  * POST /games Create a new game.
  * GET /games/:id Get game by ID.
  * PUT /games/:id Update game by ID.
  * DELETE /games/:id Delete game by ID.

## Reviews
* A logged in user can get all reviews
* A logged in user can get all reviews by genre
* A logged in user can create, view, edit or delete their review.

  * GET /reviews Get a list of all reviews.
  * GET /reviews/:id Get review by ID.
  * GET /reviews/:genre Get a list of all reviews.
  * POST /reviews Create a new review.
  * PUT /reviews/:id Update review by ID.
  * DELETE /reviews/:id Delete review by ID.

## Comments
* A logged in user can create, view, edit or delete their comment.

  * GET /comments Get a list of all comments.
  * GET /comments/:id Get comment by ID.
  * POST /comments Create a new comment.
  * PUT /comments/:id Update comment by ID.
  * DELETE /comments/:id Delete comment by ID.

## Games Lists
* A logged in user can create, view, edit or delete their list.

  * GET /lists/:id Get games list by ID.
  * POST /lists Create a new games list.
  * PUT /lists/:id Update games list by ID.
  * DELETE /lists/:id Delete games list by ID.

# Bonus Features

## Friends
* A logged in user can get a list of all friends
* A logged in user can create, view or delete their friends.

  * GET /friends Get a list of all friends.
  * GET /friends/:id Get friend by ID.
  * POST /friends Create a new friend.
  * DELETE /friends/:id Delete friend by ID.

## Searches
* A logged in user can create a search

  * GET /searches Get a list of all searches.
  * GET /searches/:id Get search by ID.
  * POST /searches Create a new search.
  * PUT /searches/:id Update search by ID.
  * DELETE /searches/:id Delete search by ID.
