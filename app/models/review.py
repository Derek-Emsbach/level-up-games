from .db import db, environment, SCHEMA, add_prefix_for_prod

class Review(db.model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    game_id = db.Column(db.Integer, db.ForeignKey('games.id'), nullable=False)
    review_text = db.Column(db.String(1000), nullable=False)
    rating = db.Column(db.Integer, nullable=False)

    user = db.relationship("User", back_populates='reviews')
    game = db.relationship("Game", back_populates='reviews')
