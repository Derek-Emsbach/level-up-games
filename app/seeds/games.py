from app.models import db, Game, environment, SCHEMA
from datetime import date

# Create some preview images
# image1 = PreviewImage(url="https://bloximages.chicago2.vip.townnews.com/thebrunswicknews.com/content/tncms/assets/v3/editorial/2/82/2828a611-4534-5f0a-ae6a-1884eb8bc8ce/6408723007b9a.image.jpg?resize=1200%2C675")
# image2 = PreviewImage(url="https://2.bp.blogspot.com/-EIdg35epSKg/XEQE2DgcvlI/AAAAAAABShM/-l9ZHOynOgIhbufE4tI4UQs1V7XR0M_jwCLcBGAs/s1600/Metroid_Prime_%2528GameCube%2529_04.jpg")
# image3 = PreviewImage(url="https://retrogameman.files.wordpress.com/2017/05/metroid-prime-screen-shot-2017-02-16-9-54-pm-4.jpg")

# urls=["https://bloximages.chicago2.vip.townnews.com/thebrunswicknews.com/content/tncms/assets/v3/editorial/2/82/2828a611-4534-5f0a-ae6a-1884eb8bc8ce/6408723007b9a.image.jpg?resize=1200%2C675", "https://2.bp.blogspot.com/-EIdg35epSKg/XEQE2DgcvlI/AAAAAAABShM/-l9ZHOynOgIhbufE4tI4UQs1V7XR0M_jwCLcBGAs/s1600/Metroid_Prime_%2528GameCube%2529_04.jpg", "https://retrogameman.files.wordpress.com/2017/05/metroid-prime-screen-shot-2017-02-16-9-54-pm-4.jpg"]

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
    preview_images="https://bloximages.chicago2.vip.townnews.com/thebrunswicknews.com/content/tncms/assets/v3/editorial/2/82/2828a611-4534-5f0a-ae6a-1884eb8bc8ce/6408723007b9a.image.jpg?resize=1200%2C675",
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
    preview_images="https://bloximages.chicago2.vip.townnews.com/thebrunswicknews.com/content/tncms/assets/v3/editorial/2/82/2828a611-4534-5f0a-ae6a-1884eb8bc8ce/6408723007b9a.image.jpg?resize=1200%2C675",
)
hogwarts_legacy = Game(
    user_id=1,
    title='Hogwarts Legacy',
    preview_image="https://cdn.wccftech.com/wp-content/uploads/2022/07/EGS_HogwartsLegacy_AvalancheSoftware.jpg",
    description="Hogwarts Legacy is an action role-playing game in which players are able to attend classes at Hogwarts School of Witchcraft and Wizardry. Players can explore locations from the Wizarding World franchise, such as the Forbidden Forest, Diagon Alley, and Hogsmeade.",
    # release_date=date(2023, 2, 10),
    developer="Avalanche Software",
    genre="Action role-playing",
    platform="PlayStation 5",
    preview_images="https://bloximages.chicago2.vip.townnews.com/thebrunswicknews.com/content/tncms/assets/v3/editorial/2/82/2828a611-4534-5f0a-ae6a-1884eb8bc8ce/6408723007b9a.image.jpg?resize=1200%2C675",
)
red_dead_redemption_2 = Game(
    user_id=2,
    title='Red Dead Redemption 2',
    preview_image="https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Red_Dead_Redemption_II.jpg/220px-Red_Dead_Redemption_II.jpg",
    description="Red Dead Redemption 2 is a Western-themed action-adventure game. Played from a first- or third-person perspective, the game is set in an open-world environment featuring a fictionalized version of the United States in 1899.[1] It features single-player and online multiplayer components, the latter released under Red Dead Online.[2] For most of the game, the player controls outlaw Arthur Morgan, a member of the Van der Linde gang, as he completes missions—linear scenarios with set objectives—to progress the story; from the epilogue, the player controls Red Dead Redemption protagonist John Marston.[3] Outside of missions, they can freely roam the interactive world.[4] They may engage in combat with enemies using melee attacks, firearms, bow and arrow, throwables, or explosives, and can dual wield weapons.[5][6] The player can swim as Arthur but not as John.",
    # release_date=date(2002, 11, 18),
    developer="Rockstar Studios",
    genre="Action-adventure",
    platform="PlayStation 4",
    preview_images="https://bloximages.chicago2.vip.townnews.com/thebrunswicknews.com/content/tncms/assets/v3/editorial/2/82/2828a611-4534-5f0a-ae6a-1884eb8bc8ce/6408723007b9a.image.jpg?resize=1200%2C675",
)
zelda_ocarina_of_time = Game(
    user_id=2,
    title='The Legend of Zelda:Ocarina of Time',
    preview_image="https://upload.wikimedia.org/wikipedia/en/thumb/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg/220px-The_Legend_of_Zelda_Ocarina_of_Time.jpg",
    description="The Legend of Zelda: Ocarina of Time is a fantasy action-adventure game set in an expansive environment. The player controls series protagonist Link from a third-person perspective in a three-dimensional world. Link primarily fights with a sword and shield but can also use other weapons such as projectiles, bombs, and magic spells. The control scheme introduced techniques such as context-sensitive actions and a targeting system called Z-targeting, which allows the player to have Link focus and latch onto enemies or other objects. When using this technique, the camera follows the target and Link constantly faces it. Projectile attacks are automatically directed at the target and do not require manual aiming. Context-sensitive actions allow multiple tasks to be assigned to one button, simplifying the control scheme.",
    # release_date=date(2002, 11, 18),
    developer="Nintendo",
    genre="Action-adventure",
    platform="Nintendo 64",
    preview_images="https://bloximages.chicago2.vip.townnews.com/thebrunswicknews.com/content/tncms/assets/v3/editorial/2/82/2828a611-4534-5f0a-ae6a-1884eb8bc8ce/6408723007b9a.image.jpg?resize=1200%2C675",
)
metal_gear_solid = Game(
    user_id=2,
    title='Metal Gear Solid',
    preview_image="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Metal_Gear_Solid_cover_art.png/220px-Metal_Gear_Solid_cover_art.png",
    description="Players control Solid Snake, a soldier who infiltrates a nuclear weapons facility to neutralize the terrorist threat from FOXHOUND, a renegade special forces unit.[7] Snake must liberate hostages and stop the terrorists from launching a nuclear strike.[8] Cinematic cutscenes were rendered using the in-game engine and graphics, and voice acting is used throughout.[9]",
    # release_date=date(2002, 11, 18),
    developer="	Konami Computer Entertainment Japan",
    genre="	Action-adventure, stealth",
    platform="PlayStation 1",
    preview_images="https://bloximages.chicago2.vip.townnews.com/thebrunswicknews.com/content/tncms/assets/v3/editorial/2/82/2828a611-4534-5f0a-ae6a-1884eb8bc8ce/6408723007b9a.image.jpg?resize=1200%2C675",
)
witcher_3 = Game(
    user_id=3,
    title='The Witcher 3: Wild Hunt',
    preview_image="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Witcher_3_cover_art.jpg/220px-Witcher_3_cover_art.jpg",
    description="The game takes place in a fictional fantasy world based on Slavic mythology. Players control Geralt of Rivia, a monster slayer for hire known as a Witcher, and search for his adopted daughter, who is on the run from the otherworldly Wild Hunt. Players battle the game's many dangers with weapons and magic, interact with non-player characters, and complete quests to acquire experience points and gold, which are used to increase Geralt's abilities and purchase equipment. The game's story has three possible endings, determined by the player's choices at key points in the narrative.",
    # release_date=date(2002, 11, 18),
    developer="CD Projekt Red",
    genre="Action role-playing",
    platform="Xbox One",
    preview_images="https://bloximages.chicago2.vip.townnews.com/thebrunswicknews.com/content/tncms/assets/v3/editorial/2/82/2828a611-4534-5f0a-ae6a-1884eb8bc8ce/6408723007b9a.image.jpg?resize=1200%2C675",
)
spider_man = Game(
    user_id=3,
    title='Spider-Man',
    preview_image="https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg",
    description="Based on the Marvel Comics character Spider-Man, it tells an original narrative that is inspired by the long-running comic book mythology, while also drawing from various adaptations in other media. In the main story, the super-human crime lord Mister Negative orchestrates a plot to seize control of New York City's criminal underworld. When Mister Negative threatens to release a deadly virus, Spider-Man must confront him and protect the city while dealing with the personal problems of his civilian persona, Peter Parker.",
    # release_date=date(2002, 11, 18),
    developer="Insomniac Games",
    genre="Action-adventure",
    platform="PlayStation 5",
    preview_images="https://bloximages.chicago2.vip.townnews.com/thebrunswicknews.com/content/tncms/assets/v3/editorial/2/82/2828a611-4534-5f0a-ae6a-1884eb8bc8ce/6408723007b9a.image.jpg?resize=1200%2C675",
)
skyrim = Game(
    user_id=3,
    title='The Elder Scrolls V: Skyrim',
    preview_image="https://upload.wikimedia.org/wikipedia/en/thumb/1/15/The_Elder_Scrolls_V_Skyrim_cover.png/220px-The_Elder_Scrolls_V_Skyrim_cover.png",
    description="The game is set 200 years after the events of Oblivion, and takes place in Skyrim, the northernmost province of Tamriel. Its main story focuses on the player's character, the Dragonborn, on their quest to defeat Alduin the World-Eater, a dragon who is prophesied to destroy the world. Over the course of the game, the player completes quests and develops the character by improving skills. The game continues the open world tradition of its predecessors by allowing the player to travel anywhere in the game world at any time, and to ignore or postpone the main storyline indefinitely.",
    # release_date=date(2002, 11, 18),
    developer="	Bethesda Game Studios",
    genre="Action role-playing",
    platform="PlayStation 3",
    preview_images="https://bloximages.chicago2.vip.townnews.com/thebrunswicknews.com/content/tncms/assets/v3/editorial/2/82/2828a611-4534-5f0a-ae6a-1884eb8bc8ce/6408723007b9a.image.jpg?resize=1200%2C675",
)


def seed_games():
    db.session.add(metroid_prime)
    db.session.add(elden_ring)
    db.session.add(hogwarts_legacy)
    db.session.add(red_dead_redemption_2)
    db.session.add(zelda_ocarina_of_time)
    db.session.add(metal_gear_solid)
    db.session.add(witcher_3)
    db.session.add(spider_man)
    db.session.add(skyrim)
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
