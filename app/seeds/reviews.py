from app.models import db, Review, environment, SCHEMA


def seed_reviews():
    rev1 = Review(user_id=1, game_id=1,
                  review_text="My favorite of the Metroid games. Spent countless hours as a kid playing this game and will never forget it!", rating=9)
    rev2 = Review(user_id=2, game_id=2,
                  review_text="I'll never forget the first time I saw the lands between. This game will make you better whether you want to or not.", rating=10)
    rev3 = Review(user_id=3, game_id=3, review_text="This is the game I always wanted when I was a kid. Love to explore Hogwarts and pretend to live out my fantasy of being a real wizard in the HP world!", rating=9)
    rev4 = Review(user_id=4, game_id=4,
                  review_text="I was very hesitant about trying this one, given it's a survival story game with shooting (which I came to the conclusion I'd be pretty balls at after playing part of the new Tomb Raider and Fallout New Vegas and watching various other ones like 'Last of Us'). But of course games have recently become alot more casual gamer friendly, this one included, as I discovered after failing a gun fight 4/5 times that I could simply skip past it... which seems like a huge cop out, but honestly if you're generally more invested in a game for other aspects, like characters, story and environment, then skipping the odd gun fight or dice with danger because you lack basic gaming ability sometimes is really not a huge deal. ", rating=8)
    rev5 = Review(user_id=5, game_id=5,
                  review_text="A magical and epic video game experience and one of the first 3D games ever developed that makes you feel like your'e going on an honest to god real adventure! Sure time may have not been the kindest to this game as it is quite dated and the over world may seem small by comparison to today's standards with many games, even future games in the Zelda series that may have trumped it. The context sensitive mechanics and the lock on combat system paved the way for the core mechanics for future 3D adventure titles to come which were further refined in later installments. ", rating=9)
    rev6 = Review(user_id=6, game_id=6, review_text="Metal Gear Solid is one of the best games ever created. The graphics are revolutionary, the gameplay is excellent, the storyline is top, the gameplay relys on stealth rather than Doomish action. You are Solid Snake, a super-agent who is sent to Alaska to take out the terrorists that occupied a U.S. nuclear facility. You arrive at the dock-area, and the place is crowded with armed guards. You sneak your way past them. If you try to kill them, there is a good chance that you`ll be killed. Brilliant! The storyline is very good and borrows heavily from blockbuster action-movies, but this is far better than most movies. The only downside of this magnificent title, is that it is too short, but don`t refuse", rating=10)
    rev7 = Review(user_id=7, game_id=7,
                  review_text="A great time sink. A living, breathing open world, with so much to explore and do. The visuals have aged in the 5 years since it's release, but they're still good enough to provide a fantastic immersive experience. The main quest is as engrossing as many top end TV shows and films, and the side quests are not shallow fetch quest fillers. The combat is souls/borne inspired, but not as refined, but it's still quite satisfying, with a skill tree and potion buffs to accommodate different play styles. Treasure hunts exist within the game to find legendary Swords and armour, and a fantastic upgrade system is in place that really does feel like you're getting better as you play, although enemies, particularly some bosses, will a", rating=7)
    rev8 = Review(user_id=8, game_id=8,
                  review_text="As someone who grew up seeing the 1st and 2nd Tobey Spider-Man films in theaters as a fairly young kid and knowing even at that age what great films they were let alone great super hero movie, which obviously that landscape was very different back then compared to today, but to be able to see how they constructed this somewhat origin story for Tom Holland from all the way from Civil War to No Way Home and to throw in so many great moments along the way for people like me and others and to make so many amazing moments just work flawlessly especially the fan service moments. They were able to sneak in a surprising amount of explanations and maybe things that happened after certain stories ended or behind the scenes ", rating=8)
    rev9 = Review(user_id=9, game_id=9, review_text="This is the game I always wanted when I was a kid. Love to explore Hogwarts and pretend to live out my fantasy of being a real wizard in the HP world!", rating=9)
    rev10 = Review(user_id=2, game_id=1,
                  review_text="What an amazing game.  When ever I played this I got this feeling of Adventure and total curiosity that ''I want to explore!'' mindset.  It is almost like a Studio Ghibli movie because it feels like it does not end it just goes on unlike modern games and movies.....Although yes there are themes that may not coordinate well however this is a game that when one takes their time the experience is magical and Adventurous.", rating=9)
    rev11 = Review(user_id=3, game_id=2,
                  review_text="Elden Ring is a masterpiece, having mastered the art of showing without telling.  As a result, it is very different from other open-world games I have played such as Skyrim and Far Cry which are story and questline driven. From the get-go, Elden Ring doesn't impose any particular playstyle or route on you. You are completely free to do what you want to from the very start of the game. You can finish the main storyline and beat the final boss or you can explore the entire map without ever seeing the main bosses, it truly is up to you with no outside influence. It is truly refreshing to feel this sense of freedom in choice and exploration in any open world game.", rating=10)
    rev12 = Review(user_id=4, game_id=3, review_text="It's difficult to find someone oblivious to the world of Harry Potter. For many it was a property that grew up with them, with both the book and film series persisting in the zeitgeist for decades. It's confusing then that it's taken this long to get a game that promises to deliver on the fantasy of becoming a wizard or witch within that universe; attending classes, learning spells, engaging in mischief, and exploring the grandeur of Hogwarts Castle. Hogwarts Legacy delivers on that promise, to a degree. Its adaptation of this universe is undeniably the most extensive yet, allowing you to truly explore Hogwarts and its surrounding areas like never before.", rating=6)
    rev13 = Review(user_id=5, game_id=4,
                  review_text="When I was going to buy it I wasnt sure if it was going to be a good game i was used to play minecraft and now and then i would buy another game, finish it and go back to minecraft. But with rdr2 it was different I spent countless hours playing the campaing, doing treasure hunts, easter eggs and exploring and I couldnt stop having fun, this game changed my perspective of what is a good campaing, I felt connected to the characters and felt happy and sad when they did. This game is something else, every mission is different, you almost never get bored and you can just spend hours looking at the details, the online isn’t so good but I still had some fun doing the missions with strangers, hunting treasures, fighting people and hunting bounties", rating=9)
    rev14 = Review(user_id=6, game_id=5,
                  review_text="Amazing childhood I am 30 and still play this game there really is something Legendary about this game so many nice things to say about it growing up! I remember seeing demos in the stores and now you can't buy it New anymore it's sad honestly seeing your childhood disappear before your eyes isn't pretty. You would think companies aim for the money but they don't if that was the case these classic and retro games could be still bought in stores. I found a used Like New condition Zelda Collectors Edition copy for the Gamecube with used Nintendo Wii that came in good condition It never even stated it was refurbished or USED LIKE NEW it was freakishly discounted of course probably because of how bad the gaming industry is doing at keeping these classic video games.", rating=9)
    rev15 = Review(user_id=7, game_id=6, review_text="Metal Gear Solid was a good game, what it lacks in graphics compensates in good gameplay, storyline, and mechanics. First time I ever played it was back in 1998 when the Pizza Hut demo disc came out. By the way Ted Bailey, MGS was not the first First Person Shooter, that was Wolfenstien, not MGS. Hideo Kojima has made a masterpiece that is hollywood worthy. Psycho Mantis did makeme break 2 controllers, but what the hell, it is one of the best games ever made, that and Syphon Filter are the best PSX games to buy.", rating=10)
    rev16 = Review(user_id=8, game_id=7,
                  review_text="So you heard millions of times ""Best game ever period"", ""Very good game"", ""Insane and gorgeous detail"", you get very skeptical and hyped at the same time, you grab the game 2 years after it's release (or more) and you play it thinking ok time to be check out what all they say and guess what!?... this game f**kin delivers on all cylinders.", rating=9)
    rev17 = Review(user_id=9, game_id=9,
                  review_text="This game is quite good for a 2011 game Started playing in 2020 and I played over 1,000 hours of Skyrim. The story is Decent however the options and customizations in this game are very good like being able to customize your character and make them a warrior, thief, or mage and being able to decorate your own house or build it in the wilderness from scratch. The terrain is als9 amazing except for how annoying it is to climb up a mountain with no horse. The best part about this game is the Music and ambient that play while exploring the wilderness or inside cities and building or during combat. The DLC's are also very good as well and give more things for me to do in the game. Although the game is quite buggy at times like w", rating=10)
    rev18 = Review(user_id=1, game_id=9, review_text="You will see people hating on skyrim because of its graphics but they aren't that bad. I would even say they are pretty dang good especially because it was made in 2011. I also love that there are so many side stories. It lets you build you character with powers and friends. Along with that there is always something to do and if you feel like you want to start a new character chances are a lot of the sides quests will be different based on your build. For example, right now I am playing an archmage build but if I decided to go with an assassin build next I won't do the collage of winterhold quests and instead go to riften. All in all a 10/10 game even now 10 years after launch.", rating=9)
    rev19 = Review(user_id=5, game_id=1, review_text="Metroid Prime is among the best games of all time. The atmosphere is incredibly immersive, putting you into the shoes of the greatest bounty hunter in the galaxy as you explore a beautifully crafted alien planet, learn about the life-forms that live and have lived there, and the catastrophe that struck in decades past. The controls are wonderfully fluid, and only get better the more upgrades you get, giving you more abilities with which to traverse the in-game map. Everything is polished, secrets are hidden in every crevice, and the progression is excellently handled. Metroid Prime even includes an in-game hint system that subtly guides you if you're ever lost for too long, ", rating=9)
    rev20 = Review(user_id=6, game_id=2, review_text="Elden ring might be the most beautiful and detailed game world I've ever seen. Everytime I thought I saw all it has to offer I tuned a corner or went down a long elevator to a whole new area spanning out into the distance that I had no idea was even there. You can tell the world is hand crafted and not procedurally assisted by a computer program. Every little thing seems to have it's place and you don't see a lot of repeating assets or structures, everything was designed and put in place with a specific intention. It's the same amazing quality with the open world encounters, they all feel unique and each one feels new, not like most open worlds that have their world filled t", rating=10)

    db.session.add(rev1)
    db.session.add(rev2)
    db.session.add(rev3)
    db.session.add(rev4)
    db.session.add(rev5)
    db.session.add(rev6)
    db.session.add(rev7)
    db.session.add(rev8)
    db.session.add(rev9)
    db.session.add(rev10)
    db.session.add(rev11)
    db.session.add(rev12)
    db.session.add(rev13)
    db.session.add(rev14)
    db.session.add(rev15)
    db.session.add(rev16)
    db.session.add(rev17)
    db.session.add(rev18)
    db.session.add(rev19)
    db.session.add(rev20)
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
