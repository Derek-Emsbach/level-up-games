from .db import db, environment, SCHEMA, add_prefix_for_prod


class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    game_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('games.id')), nullable=False)
    review_text = db.Column(db.String(1000), nullable=False)
    rating = db.Column(db.Integer, nullable=False)

    # Related Data
    user = db.relationship("User", back_populates='reviews')
    games = db.relationship("Game", back_populates='reviews')

    def __repr__(self):
        return f"<Review id: {self.id}, user_id: {self.user_id}, game_id: {self.game_id}, review_text: {self.review_text}, rating: {self.rating}>"

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'gameId': self.game_id,
            'reviewText': self.review_text,
            'rating': self.rating,
        }
