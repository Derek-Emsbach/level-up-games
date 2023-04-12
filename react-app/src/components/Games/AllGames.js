import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllGamesThunk } from "../../store/games";
import SingleGame from "./SingleGame";
// import "./AllGames.css";

const AllGames = () => {
	const dispatch = useDispatch();

	const games = useSelector((state) => Object.values(state.games));

	useEffect(() => {
		dispatch(getAllGamesThunk());
	}, [dispatch]);

	return (
		<div className="bg-gradient-to-r from-slate-800 via-sky-700 to-slate-800">
			<div>
				<div className="flex flex-col items-center justify-center content-center">
					{games.map((game) => (
						<SingleGame key={game.id} game={game} />
					))}
				</div>
			</div>
		</div>
	);
};

export default AllGames;
