import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGamesThunk } from "../../store/games";
import "./AllGames.css";

const AllGames = () => {
	const dispatch = useDispatch();

	const games = useSelector((state) => Object.values(state.games));

	useEffect(() => {
		dispatch(getAllGamesThunk());
	}, [dispatch]);

	return (
		<div>
			<h1>All Games</h1>
			{games.map((game) => (
				<div key={game.id} className="game-container">
					<h4 className="game-title">{game.title}</h4>
					<div className="img-container">
						<img
							className="game-image"
							alt={`Cover art from ${game.title}`}
							src={game.previewImage}
						></img>
					</div>
                    <div className="review-container">
                        <div>Review</div>
                    </div>
					{/* <p>{game.description}</p> */}
				</div>
			))}
		</div>
	);
};

export default AllGames;
