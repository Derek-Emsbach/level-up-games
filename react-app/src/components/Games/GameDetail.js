import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
	getAllGamesThunk,
	getSingleGame,
	deleteGameThunk,
} from "../../store/games";
import { getAllReviewsThunk, getSingleReview } from "../../store/reviews";
import ReviewForm from "../Reviews/CreateReview";
import ReviewByGameId from "../Reviews/ReviewByGameId";
// import { getAllReviewsThunk } from "../../store/reviews";
// import ReviewByGameId from "../Reviews/ReviewByGameId";

// import ReviewByGameId from "../Reviews/ReviewByGameId";

const GameDetail = () => {
	const dispatch = useDispatch();
	const { gameId } = useParams();
	const history = useHistory();
	const game = useSelector((state) => state.games[gameId]);
	const user = useSelector((state) => state.session.user);
	const reviews = useSelector((state) => Object.values(state.review));
	console.log(game);
	useEffect(() => {
		dispatch(getAllGamesThunk());
		dispatch(getSingleGame(gameId));
		dispatch(getAllReviewsThunk());
	}, [dispatch, gameId]);

	if (!game) {
		// handle the case where the game data is still loading or not found
		return <div>Loading...</div>;
	}

	const editGameForm = () => {
		history.push(`games/${gameId}/update`);
	};

	const handleDelete = () => {
		dispatch(deleteGameThunk({ gameId, user_id: user.id }));
	};

	const isReview = reviews.filter(
		(review) => review.userId === user.id && review.gameId === gameId
	);
	console.log(isReview);
	return (
		<div className="game-caontainer">
			<div className="platform">
				{user.username} played on [{game.platform}]
			</div>
			<img className="game-img" src={game.previewImage}></img>
			<div className="game-description">
				<p>{game.description}</p>
			</div>
			<div className="developer">
				<strong>{game.developer}</strong>
			</div>
			{user.id === game.userId ? (
				<>
					<button onClick={editGameForm}>Edit</button>
					<button onClick={handleDelete}>Delete</button>
				</>
			) : null}

			<div className="game-review-header">Game Reviews</div>
			<div>
				{isReview.length === 0 ? (
					<div className="review-form-container">
						<div>Have you played this game?</div>
						<label>Give your thoughts on it!</label>
						<ReviewForm game={game} />
					</div>
				) : null}
				<ReviewByGameId game={game} />
			</div>
		</div>
	);
};

export default GameDetail;
