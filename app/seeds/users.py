from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    mario_dude47 = User(
        username='mario_dude47', email='marnie@aa.io', password='password')
    elden_lord95 = User(
        username='elden_lord95', email='elden_lord95@aa.io', password='password')
    las_plagus = User(
        username='las_plagus', email='las_plagus@aa.io', password='password')
    solid_snake = User(
        username='solid_snake', email='solid_snake@aa.io', password='password')
    peter_parker = User(
        username='peter_parker', email='peter_parker@aa.io', password='password')
    dovahkiin18 = User(
        username='dovahkiin18', email='dovahkiin18@aa.io', password='password')
    the_bandicoot = User(
        username='the_bandicoot', email='the_bandicoot@aa.io', password='password')
    mega_manX = User(
        username='mega_manX', email='mega_manX@aa.io', password='password')



    db.session.add(demo)
    db.session.add(mario_dude47)
    db.session.add(elden_lord95)
    db.session.add(las_plagus)
    db.session.add(solid_snake)
    db.session.add(peter_parker)
    db.session.add(dovahkiin18)
    db.session.add(the_bandicoot)
    db.session.add(mega_manX)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
