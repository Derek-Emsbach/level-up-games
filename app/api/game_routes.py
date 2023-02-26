from flask import Blueprint, request
from ..models import Game, db
from ..utils import Print
from flask_login import current_user


game_routes = Blueprint('games', __name__)


@game_routes.route('')
def get_all_games():

    games = Game.query.all()

    res = {game.id: game.to_dict() for game in games}

    return res

@game_routes.route('', methods=["POST"])
def create_new_game():
    game_data = request.json

    new_game = Game(**game_data, user_id=current_user.id)

    db.session.add(new_game)
    db.session.commit()


    return {new_game.id: new_game.to_dict()}


# @game_routes.route('', methods=["PATCH", "PUT"])
# def edit_tweet():
#     tweet_data = request.json

#     tweet = Tweet.query.get(tweet_data['id'])

#     tweet.text = tweet_data['text']

#     db.session.commit()

#     return {tweet.id: tweet.to_dict()}


# @game_routes.route('/<int:id>', methods=["DELETE"])
# def delete_tweet(id):
#     data = request.json

#     if data["user_id"] != current_user.id:
#         return {"error": "You are not authorized to delete this tweet"}, 401

#     tweet = Tweet.query.get(id)

#     db.session.delete(tweet)
#     db.session.commit()

#     return {"msg": "Successfully deleted"}
