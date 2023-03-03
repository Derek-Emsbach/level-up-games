import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllGamesThunk, getSingleGame } from "../../store/games";
import ReviewForm from "../Reviews/CreateReview";
import ReviewByGameId from "../Reviews/ReviewByGameId";
// import { getAllReviewsThunk } from "../../store/reviews";
// import ReviewByGameId from "../Reviews/ReviewByGameId";

// import ReviewByGameId from "../Reviews/ReviewByGameId";

const GameDetail = () => {
	const dispatch = useDispatch();
	const { gameId } = useParams();
	const game = useSelector((state) => state.games[gameId]);
	const user = useSelector((state) => state.session.user);

	useEffect(() => {
		dispatch(getAllGamesThunk());
		dispatch(getSingleGame(gameId));
	}, [dispatch, gameId]);

	if (!game) {
		// handle the case where the game data is still loading or not found
		return <div>Loading...</div>;
	}

	return (
		<div>
			<div>
				{user.username} played on [{game.platform}]
			</div>
			<img src={game.previewImage}></img>
			<div>
				<p>{game.description}</p>
			</div>
			<div>
				<strong>{game.developer}</strong>
			</div>

			<h2>Game Reviews</h2>
			<div>
			<h3>Have you played this game?</h3>
			<label>Give your thoughts on it!</label>
			<ReviewForm game={game}/>
			<ReviewByGameId game={game}/>
			</div>
		</div>
	);
};

export default GameDetail;
