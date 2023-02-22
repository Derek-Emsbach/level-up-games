from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    # Related Data
    games = db.relationship("Game", back_populates='user')
    lists = db.relationship("List", back_populates='user')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def __repr__(self):
        return f"<user id: {self.id}, username: {self.username}, email: {self.email}>"

    def to_dict(self):
        # user_games = []

        # for game in self.games:
        #     user_games.append(game.to_dict())

        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'games' : [game.to_dict() for game in self.games],
            'lists' : self.lists
        }
