# from .db import db, environment, SCHEMA, add_prefix_for_prod
# # from .game_lists import game_lists

# game_lists = db.Table(
#     "game_lists",
#     db.Model.metadata,
#     db.Column('lists', db.Integer, db.ForeignKey(
#         add_prefix_for_prod('lists.id')), primary_key=True),
#     db.Column('games', db.Integer, db.ForeignKey(
#         add_prefix_for_prod('games.id')), primary_key=True)
# )
# class List(db.Model):
#     __tablename__ = 'lists'

#     if environment == "production":
#         __table_args__ = {'schema': SCHEMA}

#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey(
#         add_prefix_for_prod('users.id')), nullable=False)
#     list_name = db.Column(db.String(255), nullable=False)

#     # Related Data
#     user = db.relationship("User", back_populates='lists')
#     games = db.relationship(
#         "Game", secondary="game_lists", lazy="joined")
#     # list_of_games = db.relationship(
#         # "Game", secondary=game_lists, back_populates='game_in_lists', cascade='all, delete')

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'userId': self.user_id,
#             'listName': self.list_name,
#             'listOfGames': [game.to_dict() for game in self.list_of_games]
#         }
