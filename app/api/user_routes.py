from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User

user_routes = Blueprint('users', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
   
    return user.to_dict()

# Will need tro import ProfileForm after creating it

# @user_routes.route('/<int:id>', methods=['PUT'])
# @login_required
# def edit_user(id):
#     form = ProfileForm()
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():

#         data = form.data


#         user= User.query.get(id)
#         for key, value in data.items():
#             setattr(user, key, value)

#         db.session.commit()

#         return user.to_dict_with_related()
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 400
