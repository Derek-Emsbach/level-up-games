from flask import Blueprint
from ..models import Game, db
from ..utils import Print


game_routes = Blueprint('games', __name__)


@game_routes.route('')
def get_all_games():

    games = Game.query.all()

    res = {game.id: game.to_dict() for game in games}

    return res
