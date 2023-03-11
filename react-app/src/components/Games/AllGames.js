import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
		<div>

			{/* <p>Whether it just came out or you played it on NES for the first time...</p>
			<p>Share your story and hear from other gamers like you!</p> */}
			<div className="grid grid-cols-4 md:columns-none overflow-visible sm-grid-cols-none">
				<div className="h-100 bg-gradient-to-r from-slate-900 to-violet-700 row-span-1 overflow-visible">

				</div>
				<div className="col-start-2 col-span-2 h-100 bg-gradient-to-r from-violet-700 to-cyan-800 row-span-1 overflow-visible">

					{games.map((game) => (
						<SingleGame key={game.id} game={game} />
					))}
				</div>
				<div className="h-100 bg-gradient-to-r from-cyan-800 to-slate-900 row-span-1 overflow-visible">

				</div>
			</div>
		</div>
	);
};

export default AllGames;
