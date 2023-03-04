from .db import db, environment, SCHEMA, add_prefix_for_prod
from .game_lists import game_lists


class Game(db.Model):
    __tablename__ = 'games'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    preview_image = db.Column(db.String(1000), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    # release_date = db.Column(db.Date, nullable=True)
    developer = db.Column(db.String(255), nullable=False)
    genre = db.Column(db.String(255), nullable=False)
    platform = db.Column(db.String(255), nullable=False)

    # Related Data
    user = db.relationship("User", back_populates='games')
    reviews = db.relationship("Review", back_populates='games', cascade='all, delete')
    game_in_lists = db.relationship(
        "List", secondary=game_lists, back_populates='list_of_games', cascade='all, delete')

    def __repr__(self):
        # Removed
        # release_date: {self.release_date},
        return f"<Game id: {self.id}, user_id: {self.user_id}, title: {self.title}, preview_image: {self.preview_image}, description: {self.description}, developer: {self.developer}, genre: {self.genre}, platform: {self.platform}>"

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'title': self.title,
            'previewImage': self.preview_image,
            'description': self.description,
            # 'releaseDate': self.release_date,
            'developer': self.developer,
            'genre': self.genre,
            'platform': self.platform,
        }
