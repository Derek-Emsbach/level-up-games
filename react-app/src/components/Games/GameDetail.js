import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
	getAllGamesThunk,
	getSingleGame,
	deleteGameThunk,
} from "../../store/games";
import { getAllReviewsThunk, getSingleReview } from "../../store/reviews";
import AverageReview from "../Reviews/AvgReviewPerGame";
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
	// console.log(reviews)
	// console.log(game)
	// console.log(user)

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
		history.push(`/games/${gameId}/update`);
	};
	const createReviewForm = () => {
		history.push(`${gameId}/reviewform`);
	};

	const handleDelete = () => {
		const specificGame = game.id
		dispatch(deleteGameThunk({ specificGame, user_id: user.id }));
		history.push('/')
	};

	const isReview = reviews.filter(
		(review) => review.gameId === game.id
	);
	const isIsReview = isReview.filter(
		(reviewById) => reviewById.userId === user.id
	)
	console.log(isIsReview.length)
	return (
		<div className="grid grid-cols-4 h-fill">
			<div className="h-100 bg-gradient-to-r from-slate-900 to-violet-700 row-span-1"></div>
			<div className="flex flex-col col-start-2 col-span-2 h-100 bg-gradient-to-r from-violet-700 to-cyan-800 row-span-1">
				<div className="flex place-items-center self-center justify-center content-center items-center text-white">
					<div className="flex self-center justify-center content-center items-center col-start-2 col-span-2 text-8xl text-slate-300 rounded-lg bg-slate-900 mt-8 p-10 border-double border-8 border-white shadow-2xl shadow-sky-300">
						{game.title}
					</div>
				</div>
				<div className="flex place-items-center self-center justify-center content-center items-center text-slate-400 m-6">
					<strong>{game.developer}</strong>
				</div>
				<div className="flex flex-col  bg-slate-900 text-slate-200 rounded-lg items-center w-100 h-70 p-8 pt-6 pb-8 mt-6 mb-6 border-4 border-sky-400">
					<div className="flex flex-row text-2xl border-double border-4 border-violet-700 rounded-lg p-2 shadow-md shadow-indigo-300">
						<strong className="text-sky-600 pr-5">
							{user.username}
						</strong>{" "}
						played on{" "}
						<strong className="pl-5 text-sky-600/75">
							{" "}
							{game.platform}
						</strong>
					</div>
					<AverageReview game={game} />
					<div className="flex flex-col w- pb-20 pt-20 place-items-center">
						<img
							className="h-80 w-max pr-10 mb-6"
							src={game.previewImage}
						></img>
						<div className="mt-6 pl-15 rounded-lg bg-slate-700 p-5 shadow-xl shadow-slate-700">
							<p>{game.description}</p>
						</div>
					</div>
					{/* {user.id === game.userId ? (
						<div className="flex flex-row w-1/6 justify-start w-max">
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
					) : null} */}

					<div className="flex flex-col w-fit justify-center justify-items-center self-center text-5xl pb-5 pt-20">
						Game Reviews
					</div>
					<div className="flex flex-col w-full pt-8 border-t-4 border-indigo-500 ">
						{/* {isReview.length === 0 ? (
						<div className="review-form-container">
						<ReviewForm game={game} />
						</div>
					) : null} */}
					{!isIsReview.length > 0 && (

						<button
							className="flex place-content-center justify-center justify-items-center self-center rounded-full bg-sky-700 w-80 "
							onClick={createReviewForm}
						>
							Review Game
						</button>
					)}
						<ReviewByGameId game={game} />
					</div>
				</div>
			</div>
			<div className="h-100 bg-gradient-to-r from-cyan-800 to-slate-900 row-span-1"></div>
		</div>
	);
};

export default GameDetail;
