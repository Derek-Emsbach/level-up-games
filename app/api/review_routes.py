from flask import Blueprint, request
from ..models import Review, db
from ..utils import Print
from flask_login import current_user
from app.forms import ReviewForm


review_routes = Blueprint('reviews', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@review_routes.route('')
def get_all_reviews():

    reviews = Review.query.all()

    res = {review.id: review.to_dict() for review in reviews}

    return res


@review_routes.route('/<int:id>')
def get_review(id):
    review = Review.query.get(id)

    return review.to_dict()


@review_routes.route('', methods=["POST"])
def create_new_review():
    form = ReviewForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review_data = form.data
        game_data = request.json
        new_review = Review(user_id=current_user.get_id(),
                            game_id=game_data['game_id'], review_text=review_data['review_text'], rating=review_data['rating'])

        form.populate_obj(new_review)
        db.session.add(new_review)
        db.session.commit()

        return {new_review.id: new_review.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@review_routes.route('/<int:id>', methods=["PATCH", "PUT"])
def edit_review(id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review_data = form.data
        review = Review.query.get(id)
        for key, value in review_data.items():
            setattr(review, key, value)

        # review.review_text = review_data['reviewText']
        # review.rating = review_data['rating']

        db.session.commit()

        return {review.id: review.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@review_routes.route('/<int:id>', methods=["DELETE"])
def delete_review(id):
    data = request.json

    if data["user_id"] != current_user.id:
        return {"error": "You are not authorized to delete this review"}, 401

    review = Review.query.get(id)

    db.session.delete(review)
    db.session.commit()

    return {"msg": "Successfully deleted"}
