import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGamesThunk } from "../../store/games";

const AllGames = () => {
	const dispatch = useDispatch();

    // const games = useSelector((entireReduxStore) => {
    //     console.log("I'm selecting some new redux data");
    //     return Object.values(entireReduxStore);
    // });

    const games = useSelector((state) => Object.values(state.games))

    useEffect(() => {
        console.log("I'M ABOUT TO DISPATCH FOR ALLLLL THE GAAAAMMEES");
        dispatch(getAllGamesThunk())
    }, [dispatch])


	return (
        <div>
            <h1>All Games</h1>
            {games.map((game) => (
                <div key={game.id}>
                    <h4>{game.title}</h4>
                    <img src={game.previewImage}></img>
                    <p>{game.description}</p>
                </div>
            ))}
            {console.log('All games component has fully loaded/rerendered')}
        </div>
    )
};

export default AllGames;
