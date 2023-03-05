# from app.models import db, List, environment, SCHEMA
# from .games import metroid_prime, elden_ring, hogwarts_legacy


# def seed_lists():
#     fav1 = List(
#         user_id=1, list_name='Top Games', games=[elden_ring, metroid_prime])
#     fav2 = List(
#         user_id=1, list_name='Most Played', games=[elden_ring])
#     fav3 = List(
#         user_id=1, list_name='Played', games=[metroid_prime, elden_ring, hogwarts_legacy])

#     db.session.add(fav1)
#     db.session.add(fav2)
#     db.session.add(fav3)
#     db.session.commit()


# # Lists a raw SQL query to TRUNCATE or DELETE the lists table. SQLAlchemy doesn't
# # have a built in function to do this. With postgres in production TRUNCATE
# # removes all the data from the table, and RESET IDENTITY resets the auto
# # incrementing primary key, CASCADE deletes any dependent entities.  With
# # sqlite3 in development you need to instead use DELETE to remove all data and
# # it will reset the primary keys for you as well.
# def undo_lists():
#     if environment == "production":
#         db.session.execute(
#             f"TRUNCATE table {SCHEMA}.lists RESTART IDENTITY CASCADE;")
#     else:
#         db.session.execute("DELETE FROM lists")
#         db.session.execute("DELETE FROM game_lists")

#     db.session.commit()
