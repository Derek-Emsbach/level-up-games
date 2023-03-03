from flask import Blueprint, request
from ..models import Review, db
from ..utils import Print
from flask_login import current_user


review_routes = Blueprint('reviews', __name__)


@review_routes.route('')
def get_all_reviews():

    reviews = Review.query.all()

    res = {review.id: review.to_dict() for review in reviews}
    Print(res)
    return res


@review_routes.route('', methods=["POST"])
def create_new_review():
    review_data = request.json
    Print(review_data)

    new_review = Review(**review_data, user_id=current_user.id)
    Print(new_review)

    db.session.add(new_review)
    db.session.commit()


    return {new_review.id: new_review.to_dict()}


@review_routes.route('/<int:id>')
def get_review(id):
    review = Review.query.get(id)
    return review.to_dict()


@review_routes.route('/<int:id>', methods=["PATCH", "PUT"])
def edit_review(id):
    review_data = request.json

    if review_data["userId"] != current_user.id:
        return {"error": "You are not authorized to delete this review"}, 401

    review = Review.query.get(id)

    review.review_text = review_data['review_text']
    review.rating = review_data['rating']

    db.session.commit()

    return {review.id: review.to_dict()}


@review_routes.route('/<int:id>', methods=["DELETE"])
def delete_review(id):
    data = request.json

    if data["user_id"] != current_user.id:
        return {"error": "You are not authorized to delete this review"}, 401

    review = Review.query.get(id)

    db.session.delete(review)
    db.session.commit()

    return {"msg": "Successfully deleted"}
