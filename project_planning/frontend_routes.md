# User-facing routes

## Home page

### `/`


This page displays all recent game reviews and created lists.

* `GET /`

## Login

### `/login`


This page displays a login form or modal.

* `GET /login`
* `POST /login`

## Register

### `/register`


This page displays a signup form or modal.

* `GET /register`
* `POST /register`

## Profile

### `/account`


This page displays user information such as reviews and lists. If logged in user is viewing their ownmm profile it gives them the ability to edit or delete their profile.

* `GET /:username`
* `PUT /:username`
* `DELETE /:username`

## Games

### `/games`


This displays games that have been added by user. Users can also add, edit, or delete a game they've added.

* `GET /games`
* `PUT /games/:gameid`
* `DELETE /games/:gameid`

## Reviews

### `/reviews`


This displays all reviews. It also can get review by user id. Allows logged in user to create, edit or delete a review.

* `GET /reviews`
* `GET /reviews/:userid`
* `POST /reviews`
* `PUT /reviews/:reviewid`
* `DELETE /reviews/:reviewid`

## Lists

### `/lists`


This displays lists that have been created by a user or lists of other users. Logged in users can edit or delete their own lists.

* `GET /lists`
* `GET /lists/:userid`
* `POST /lists`
* `PUT /lists/:listid`



# Bonus

## `/friends`

### List of user's friends.

This page displays all the users friends and will have a button

## `/inbox`

### User's private messaging inbox.

## `/notifications`

### User's notification center.

## `/notifications/:id`

### Detailed page for a specific notification.
