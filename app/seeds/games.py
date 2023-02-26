from app.models import db, Game, environment, SCHEMA
from datetime import date


# Adds a demo games
metroid_prime = Game(
    user_id=1,
    title='Metroid Prime',
    preview_image="https://assets-prd.ignimgs.com/2021/12/07/metroidprime-1638900247577.png?width=300&crop=1%3A1%2Csmart",
    description="Metroid Prime takes place between the original Metroid and Metroid II: Return of Samus. Like previous games in the series, Metroid Prime has a science fiction setting in which players control the bounty hunter Samus Aran as she battles the Space Pirates and their biological experiments on the planet Tallon IV.",
    # release_date=date(2002, 11, 18),
    developer="Nintendo",
    genre="Action",
    platform="GameCube",
)
elden_ring = Game(
    user_id=1,
    title='Elden Ring',
    preview_image="https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png",
    description="Elden Ring sees you play as an initially meaningless character in a world of monsters and demigods, all struggling for control over the Lands Between. It's your job to explore the world, grow in strength, and fight or ally with those you meet to bring about a new order by collecting the Great Runes.",
    # release_date=date(2022, 2, 25),
    developer="FromSoftware",
    genre="Adventure",
    platform="PC",
)
hogwarts_legacy = Game(
    user_id=1,
    title='Hogwarts Legacy',
    preview_image="https://cdn.wccftech.com/wp-content/uploads/2022/07/EGS_HogwartsLegacy_AvalancheSoftware.jpg",
    description="Hogwarts Legacy is an action role-playing game in which players are able to attend classes at Hogwarts School of Witchcraft and Wizardry. Players can explore locations from the Wizarding World franchise, such as the Forbidden Forest, Diagon Alley, and Hogsmeade.",
    # release_date=date(2023, 2, 10),
    developer="Avalanche Software",
    genre="Open World",
    platform="PS5",
)


def seed_games():
    db.session.add(metroid_prime)
    db.session.add(elden_ring)
    db.session.add(hogwarts_legacy)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the games table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_games():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.games RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM games")

    db.session.commit()
