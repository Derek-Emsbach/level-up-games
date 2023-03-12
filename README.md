# Level Up


Check out a live version of Level Up here:
https://level-up-7k83.onrender.com/


Level Up is a game review site inspired by sites like IGN. The idea is that all reviews will be by gamers and not the typical review industry. This is to get an authentic take on the game from other gamers perspectives with no bias.
 
 
## Stack:
The backend of Level Up is built on Python and Flask with a PostgreSQL database. Frontend
rendering is handled with React and Redux.


## Features & Implementation


### Single-Page App


*React router and components*

Level Up is a multipage app. All “pages” are first rendered at a root url “/” then routed to the associated from user interaction.
The React router handles the logic associated with component navigation, and directs to the corresponding route.
Re-rendering of child components is done through the React API.


*Frontend and Backend Interaction*

Level Up server interactions are limited to retrieval of data from and
modification of the database. The front end stores the necessary information for
rendering upon site entry. Other requests are made on a “need to know” basis by
various React components. This minimizes info passed between the frontend
and backend and allows for speedy re-rendering handled by React.


### Authentication

*Auth Page*

![image](https://user-images.githubusercontent.com/37425403/224525610-aff37047-521e-4d16-b38f-5f2cf8cb5d60.png)


*Normal Authentication*

Users of the site are required to authenticate or sign up. User will not be able to view content without signing up or loggin in.
The user model requires a unique username and password for
sign up. Upon account creation, user passwords are using the flask libraries.
Authentication uses flask libraries to match user and passwords stored on the database


*Attributes*

Games and Reviews are the most important Models of this application.

The Games table has columns for `Title`, `preview_image`, `description`, `genre`, and
`developer`. `userId` is the identifier for users in the
application interface.

Reviews consist of a `game_id`, `rating_text`, and `rating`.
`userId` is a foreign key pointing to the review belongs to.


*CRUD architecture*

Level Up lets users create, read, update, and delete games they have played. Or you can create, read, update, and delete reviews on games.
React components exist for each corresponding action in the app. Information
needed for all components or user actions performed.

[Backend Routes]
[Backend Routes]: https://github.com/Derek-Emsbach/level-up-games/blob/main/z_project_planning/backend_routes.md


**Discover Page: Shows recent pins from users**

Pictures of recent pins are displayed once logged in. User can select pins that they are intested in. It will be directed to Pin Detail where
user can click url link which directs user to the source of the pin.

*Example Home Page*
![image](https://user-images.githubusercontent.com/37425403/224525845-5fdb1ef3-b7cc-4f26-8e21-1ee3287b6b8b.png)

The user can...
1. Select and view games that have been played by other users.
2. reviews can be added to games you or other users have added.
3. create games that they have played


