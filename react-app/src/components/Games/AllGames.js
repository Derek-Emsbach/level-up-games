import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGamesThunk } from "../../store/games";
import SingleGame from "./SingleGame";
import "./AllGames.css";

const AllGames = () => {
	const dispatch = useDispatch();

	const games = useSelector((state) => Object.values(state.games));

	useEffect(() => {
		dispatch(getAllGamesThunk());
	}, [dispatch]);

	return (
		<div>
			<h1>LEVEL UP</h1>
			<h3>Game Reviews</h3>
			{/* <p>Whether it just came out or you played it on NES for the first time...</p>
			<p>Share your story and hear from other gamers like you!</p> */}
			<div className="all-games-container">
				{games.map((game) => (
						<SingleGame key={game.id} game={game} />
				))}
			</div>
		</div>
	);
};

export default AllGames;
