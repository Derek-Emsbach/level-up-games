from flask import Blueprint, request
from ..models import Game, db
from ..utils import Print
from flask_login import login_required, current_user
from app.forms import GameForm


game_routes = Blueprint('games', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


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
# @game_routes.route('', methods=["POST"])
# def create_new_game():
#     game_data = request.json

#     new_game = Game(user_id=current_user.id, title=game_data['title'], description=game_data['description'], genre=game_data['genre'],
#                     developer=game_data['developer'], platform=game_data['platform'], preview_image=game_data['preview_image'])

#     db.session.add(new_game)
#     db.session.commit()

#     return {new_game.id: new_game.to_dict()}


@game_routes.route('', methods=['POST'])
@login_required
def create_new_game():

    form = GameForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_game = Game(user_id=current_user.get_id(), title=data['title'], description=data['description'],
                        genre=data['genre'], developer=data['developer'], platform=data['platform'], preview_image=data['preview_image'])
        form.populate_obj(new_game)
        db.session.add(new_game)
        db.session.commit()
        return {new_game.id: new_game.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


# get game by game id
@game_routes.route('/<int:id>')
def get_game(id):
    game = Game.query.get(id)
    return game.to_dict()


# edit game
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


# delete game
@game_routes.route('/<int:id>', methods=["DELETE"])
def delete_game(id):
    data = request.json

    if data["user_id"] != current_user.id:
        return {"error": "You are not authorized to delete this tweet"}, 401

    game = Game.query.get(id)

    db.session.delete(game)
    db.session.commit()

    return {"msg": "Successfully deleted"}
