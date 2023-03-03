from flask import Blueprint, request
from ..models import Game, db
from ..utils import Print
from flask_login import current_user


game_routes = Blueprint('games', __name__)

# Get all games


@game_routes.route('')
def get_all_games():

    games = Game.query.all()

    res = {game.id: game.to_dict() for game in games}

    return res

# Get a specific game
# @games_routes.route('/<int:id>')
# def get_game(id):
#     game = Game.query.get(id)
#     return game.to_dict()

# Create a new game


@game_routes.route('', methods=["POST"])
def create_new_game():
    game_data = request.json
    Print(game_data)
    # new_game = Game(**game_data, user_id=current_user.id)
    new_game = Game(user_id=current_user.id, title=game_data['title'], description=game_data['description'], genre=game_data['genre'],
                    developer=game_data['developer'], platform=game_data['platform'], preview_image=game_data['preview_image'])

    db.session.add(new_game)
    db.session.commit()

    return {new_game.id: new_game.to_dict()}


@game_routes.route('/<int:id>')
def get_game(id):
    game = Game.query.get(id)
    return game.to_dict()


@game_routes.route('/<int:id>', methods=["PATCH", "PUT"])
def edit_game(id):
    game_data = request.json

    if game_data["userId"] != current_user.id:
        return {"error": "You are not authorized to delete this tweet"}, 401

    game = Game.query.get(id)

    game.title = game_data['title']
    game.preview_image = game_data['previewImage']
    game.genre = game_data['genre']
    game.developer = game_data['developer']
    game.platform = game_data['platform']

    db.session.commit()

    return {game.id: game.to_dict()}


@game_routes.route('/<int:id>', methods=["DELETE"])
def delete_game(id):
    data = request.json

    if data["user_id"] != current_user.id:
        return {"error": "You are not authorized to delete this tweet"}, 401

    game = Game.query.get(id)

    db.session.delete(game)
    db.session.commit()

    return {"msg": "Successfully deleted"}
