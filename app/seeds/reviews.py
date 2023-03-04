from app.models import db, Review, environment, SCHEMA


def seed_reviews():
    rev1 = Review(user_id=1, game_id=1,
                  review_text="My favorite of the Metroid games. Spent countless hours as a kid playing this game and will never forget it!", rating=10)
    rev2 = Review(user_id=1, game_id=2,
                  review_text="I'll never forget the first time I saw the lands between. This game will make you better whether you want to or not.", rating=10)
    rev3 = Review(user_id=1, game_id=3, review_text="This is the game I always wanted when I was a kid. Love to explore Hogwarts and pretend to live out my fantasy of being a real wizard in the HP world!", rating=9)

    db.session.add(rev1)
    db.session.add(rev2)
    db.session.add(rev3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the reviews table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()
