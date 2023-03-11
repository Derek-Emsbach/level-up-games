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
		history.push(`/${gameId}/update`);
	};
	const createReviewForm = () => {
		history.push(`${gameId}/reviewform`);
	};

	const handleDelete = () => {
		dispatch(deleteGameThunk({ gameId, user_id: user.id }));
	};

	const isReview = reviews.filter(
		(review) => review.userId === user.id && review.gameId === gameId
	);
	return (
		<div className="grid grid-cols-4 h-fill">
			<div className="h-100 bg-gradient-to-r from-slate-600 to-violet-700 row-span-1"></div>
			<div className="col-start-2 col-span-2 h-100 bg-gradient-to-r from-violet-700 to-cyan-800 row-span-1">
					<div className="flex place-items-center self-center justify-center content-center items-center text-white">
						<div className="text-8xl pt-10">{game.title}</div>
					</div>
					<div className="flex place-items-center self-center justify-center content-center items-center text-slate-400 m-6">
						<strong>{game.developer}</strong>
					</div>
				<div className="flex flex-col  bg-slate-900 text-slate-200 rounded-lg items-center w-100 h-70 p-8 pt-6 pb-8 mt-6 mb-6 border-4 border-sky-500">
					<div className="flex flex-row text-2xl border-double border-4 border-violet-700 rounded-lg p-2">
						<strong className="text-sky-600 pr-5">
							{user.username}
						</strong>{" "}
						played on{" "}
						<strong className="pl-5 text-sky-600/75">
							{" "}
							{game.platform}
						</strong>
					</div>
					<div className="flex flex-col pb-20 pt-20">
						<img
							className="h-full w-fill pr-10 mb-6"
							src={game.previewImage}
						></img>
						<div className="mt-6 pl-15">
							<p>{game.description}</p>
						</div>
					</div>
					{user.id === game.userId ? (
						<div className="flex flex-row w-1/6 justify-start h-8 w-max">
							<button
								className=" bg-purple-800 hover:bg-blue-700 text-white font-bold py-2 px-4"
								onClick={editGameForm}
							>
								Edit Game
							</button>
							<button
								className=" bg-red-900 hover:bg-blue-700 text-white font-bold py-2 px-4"
								onClick={handleDelete}
							>
								Delete
							</button>
						</div>
					) : null}

					<div className="flex justify-center justify-items-center self-center text-5xl pb-5 pt-20">
						Game Reviews
					</div>
					<div className="flex flex-col pt-8" >
						{/* {isReview.length === 0 ? (
						<div className="review-form-container">
						<ReviewForm game={game} />
						</div>
					) : null} */}
						<button
							className="flex place-content-center justify-center justify-items-center self-center rounded-full bg-sky-700 w-80"
							onClick={createReviewForm}
						>
							Review Game
						</button>
						<ReviewByGameId game={game} />
					</div>
				</div>
			</div>
			<div className="h-100 bg-gradient-to-r from-cyan-800 to-slate-900 row-span-1"></div>
		</div>
	);
};

export default GameDetail;
