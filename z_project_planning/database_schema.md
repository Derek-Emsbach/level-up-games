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

| column name  | data type | details                      |
|--------------|-----------|------------------------------|
| id           | integer   | not null, primary key        |
| user_id      | integer   | not null, foreign key (users)|
| title        | string    | not null                     |
| preview_image| image     | not null                     |
| description  | string    | not null                     |
| release_date | date      | not null                     |
| developer    | string    | not null                     |
| publisher    | string    | not null                     |
| genre        | string    | not null                     |
| platform     | string    | not null                     |
| created_at   | datetime  | not null                     |
| updated_at   | datetime  | not null                     |

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

## `lists`

| column name   | data type | details                        |
|---------------|-----------|--------------------------------|
| id            | integer   | not null, primary key          |
| user_id       | integer   | not null, foreign key (Users)  |
| list_name     | string    | not null                       |
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
