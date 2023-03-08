from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, NumberRange

class ReviewForm(FlaskForm):
    review_text = StringField(validators=[DataRequired()])
    rating = IntegerField(validators=[NumberRange(min=1, max=10, message='Game Rating needs to be between 1-10')])
