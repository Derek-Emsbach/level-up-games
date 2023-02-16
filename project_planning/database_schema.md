# **Database Schema**

## `users`

| column name | data type | details                   |
|-------------|-----------|---------------------------|
| id          | integer   | not null, primary key     |
| username    | string    | not null                  |
| email       | email     | not null, unique          |
| created_at  | datetime  | not null                  |
| updated_at  | datetime  | not null                  |

## `games`

| column name | data type | details                      |
|-------------|-----------|------------------------------|
| id          | integer   | not null, primary key        |
| user_id     | integer   | not null, foreign key (users)|
| title       | string    | not null                     |
| description | string    | not null                     |
| release_date| integer   | not null                     |
| developer   | integer   | not null                     |
| publisher   | integer   | not null                     |
| genre       | integer   | not null                     |
| platform    | integer   | not null                     |
| created_at  | datetime  | not null                     |
| updated_at  | datetime  | not null                     |

* `user_id` references `users` table

## `reviews`

| column name   | data type | details                       |
|---------------|-----------|-------------------------------|
| id            | integer   | not null, primary key         |
| user_id       | integer   | not null, foreign key (users) |
| game_id       | integer   | not null, foreign key (games) |
| review_text   | string    | not null                      |
| rating        | integer   | not null                      |
| created_at    | datetime  | not null                      |
| updated_at    | datetime  | not null                      |

* `user_id` references `users` table
* `game_id` references `games` table

## `comments`

| column name   | data type | details                        |
|---------------|-----------|--------------------------------|
| id            | integer   | not null, primary key          |
| review_id     | integer   | not null, foreign key (reviews)|
| user_id       | integer   | not null, foreign key (users)  |
| comment_text  | string    | not null                       |
| created_at    | datetime  | not null                       |
| updated_at    | datetime  | not null                       |

* `review_id` references `reviews` table
* `user_id` references `users` table

## `games_list`

| column name   | data type | details                        |
|---------------|-----------|--------------------------------|
| id            | integer   | not null, primary key          |
| user_id       | integer   | not null, foreign key (Users)  |
| list_name     | integer   | not null                       |
| created_at    | datetime  | not null                       |
| updated_at    | datetime  | not null                       |

* `user_id` references `users` table

# Bonus Features

## `friends`

| column name   | data type | details                        |
|---------------|-----------|--------------------------------|
| id            | integer   | not null, primary key          |
| user_id       | integer   | not null, foreign key (Users)  |
| friend_user_id| integer   | not null, foreign key (Users)  |
| created_at    | datetime  | not null                       |
| updated_at    | datetime  | not null                       |

* `user_id` references `users` table
* `friend_user_id` references `users` table

## `searches`

| column name   | data type | details                        |
|---------------|-----------|--------------------------------|
| id            | integer   | not null, primary key          |
| user_id       | integer   | not null, foreign key (Users)  |
| search_query  | string    | not null                       |
| created_at    | datetime  | not null                       |
| updated_at    | datetime  | not null                       |

* `userId` references `users` table
