from flask_wtf import FlaskForm
from wtforms import StringField,BooleanField
from wtforms.validators import DataRequired, Email, ValidationError, URL

class GameForm(FlaskForm):
    title = StringField(validators=[DataRequired()])
    description = StringField(validators=[DataRequired()])
    genre = StringField(validators=[DataRequired()])
    developer = StringField(validators=[DataRequired()])
    platform = StringField(validators=[DataRequired()])
    preview_image = StringField(validators=[DataRequired(), URL( message='This is not a valid image link, make sure you enter the entire image URL')])
    detail_image = StringField(validators=[DataRequired(), URL( message='This is not a valid image link, make sure you enter the entire image URL')])
