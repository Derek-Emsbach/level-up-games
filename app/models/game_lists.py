from .db import db

game_lists = db.Table(
    "game_lists",
    db.Model.metadata,
    db.Column('lists', db.Integer, db.ForeignKey('lists.id'),primary_key=True),
    db.Column('games', db.Integer, db.ForeignKey('games.id'),primary_key=True)
)
