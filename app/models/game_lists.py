from .db import db, environment, SCHEMA, add_prefix_for_prod

game_lists = db.Table(
    "game_lists",
    db.Model.metadata,
    db.Column('lists', db.Integer, db.ForeignKey(
        add_prefix_for_prod('lists.id')), primary_key=True),
    db.Column('games', db.Integer, db.ForeignKey(
        add_prefix_for_prod('games.id')), primary_key=True)
)
