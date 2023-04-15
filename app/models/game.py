# from .db import db, environment, SCHEMA, add_prefix_for_prod
# # from .game_lists import game_lists


# class Game(db.Model):
#     __tablename__ = 'games'

#     if environment == "production":
#         __table_args__ = {'schema': SCHEMA}

#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey(
#         add_prefix_for_prod('users.id')), nullable=False)
#     title = db.Column(db.String(255), nullable=False)
#     preview_image = db.Column(db.String(1000), nullable=False)
#     description = db.Column(db.String(1000), nullable=False)
#     developer = db.Column(db.String(255), nullable=False)
#     genre = db.Column(db.String(255), nullable=False)
#     platform = db.Column(db.String(255), nullable=False)

#     # Related Data
#     user = db.relationship("User", back_populates='games')
#     reviews = db.relationship(
#         "Review", back_populates='games', cascade='all, delete')
#     # game_in_lists = db.relationship(
#     #     "List", secondary=game_lists, back_populates='list_of_games', cascade='all, delete')

#     def __repr__(self):
#         return f"<Game id: {self.id}, user_id: {self.user_id}, title: {self.title}, preview_image: {self.preview_image}, description: {self.description}, developer: {self.developer}, genre: {self.genre}, platform: {self.platform}>"

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'userId': self.user_id,
#             'title': self.title,
#             'previewImage': self.preview_image,
#             'description': self.description,
#             'developer': self.developer,
#             'genre': self.genre,
#             'platform': self.platform,
#         }

# \/\/ TEST MODEL FOR ADDDING PREVIEW IMAGES ARRAY \/\/

from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy import Column, ForeignKey, Integer, String, JSON
from sqlalchemy.orm import relationship
# from .preview_image import PreviewImage

# Define a join table for the many-to-many relationship
# game_preview_images = db.Table('game_preview_images',
#     db.Column('game_id', db.Integer, db.ForeignKey(add_prefix_for_prod('games.id')), primary_key=True),
#     db.Column('preview_image_id', db.Integer, db.ForeignKey(add_prefix_for_prod('preview_images.id')), primary_key=True),
#     extend_existing=True
# )

class Game(db.Model):
    __tablename__ = 'games'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    preview_image = db.Column(db.String(1000), nullable=False)
    description = db.Column(db.String(10000), nullable=False)
    developer = db.Column(db.String(255), nullable=False)
    genre = db.Column(db.String(255), nullable=False)
    platform = db.Column(db.String(255), nullable=False)
    detail_image = db.Column(db.String(1000), nullable=True)



    # Related Data
    user = db.relationship("User", back_populates='games')
    reviews = db.relationship(
        "Review", back_populates='games', cascade='all, delete')
    # preview_images = db.relationship("PreviewImage", secondary=game_preview_images, back_populates="games")


    # def set_preview_images(self, urls):
    #     self.preview_images = ",".join(urls)

    # def get_preview_images(self):
    #     if self.preview_images:
    #         return self.preview_images.split(",")
    #     else:
    #         return []

    def __repr__(self):
        return f"<Game id: {self.id}, user_id: {self.user_id}, title: {self.title}, preview_image: {self.preview_image}, description: {self.description}, developer: {self.developer}, genre: {self.genre}, platform: {self.platform}, detail_image: {self.detail_image}>"

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'title': self.title,
            'previewImage': self.preview_image,
            'description': self.description,
            'developer': self.developer,
            'genre': self.genre,
            'platform': self.platform,
            # 'previewImages': [image.url for image in self.preview_images]
            'detailImage': self.detail_image,
        }

# class PreviewImage(db.Model):
#     __tablename__ = 'preview_images'

#     if environment == "production":
#         __table_args__ = {'schema': SCHEMA}

#     id = db.Column(db.Integer, primary_key=True)
#     url = db.Column(db.String(1000), nullable=False)

#     # Related Data
#     games = db.relationship("Game", secondary=game_preview_images, back_populates="preview_images")
