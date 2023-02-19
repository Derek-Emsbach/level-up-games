from .db import db, environment, SCHEMA, add_prefix_for_prod

class Game(db.Model):
    __tablename__ = 'games'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    preview_image = db.Column(db.String(1000), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    release_date = db.Column(db.Date, nullable=False)
    developer = db.Column(db.String(255), nullable=False)
    genre = db.Column(db.String(255), nullable=False)
    platform = db.Column(db.String(255), nullable=False)

    # Related Data
    user = db.relationship("User", back_populates='games')


    def __repr__(self):
        return f"<game id: {self.id}, user_id: {self.user_id}, title: {self.title}, preview_image: {self.preview_image}, description: {self.description}, release_date: {self.release_date}, developer: {self.developer}, genre: {self.genre}, platform: {self.platform}>"

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'preview_image': self.preview_image,
            'description': self.description,
            'release_date': self.release_date,
            'developer': self.developer,
            'genre': self.genre,
            'platform': self.platform,
        }
