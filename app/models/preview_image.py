from .db import db, environment, SCHEMA, add_prefix_for_prod

game_preview_images = db.Table('game_preview_images',
    db.Column('game_id', db.Integer, db.ForeignKey(add_prefix_for_prod('games.id')), primary_key=True),
    db.Column('preview_image_id', db.Integer, db.ForeignKey(add_prefix_for_prod('preview_images.id')), primary_key=True)
)

class PreviewImage(db.Model):
    __tablename__ = 'preview_images'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(1000), nullable=False)

    # Related Data
    games = db.relationship("Game", secondary=game_preview_images, back_populates="preview_images")

    def __repr__(self):
        return f"<PreviewImage id: {self.id}, url: {self.url}>"
