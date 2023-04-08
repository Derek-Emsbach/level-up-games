import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { deleteGameThunk } from "../../store/games";
import ReviewByGameId from "../Reviews/ReviewByGameId";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./AllGames.css";
import AverageReview from "../Reviews/AvgReviewPerGame";

const SingleGame = ({
	game: { id, userId, title, previewImage, genre, developer, platform },
}) => {
	const history = useHistory();
	const dispatch = useDispatch();

	const user = useSelector((state) => state.session.user);

	const editGameForm = () => {
		history.push(`games/${id}/update`);
	};

	const handleDelete = () => {
		dispatch(deleteGameThunk({ id, user_id: userId }));
	};

	return (
		<div className="flex flex-col items-center justify-center content-center bg-slate-800 text-slate-200 rounded-3xl items-center w-3/5 h-70 p-8 pt-6 pb-8 mt-6 mb-6 hover:border-4 border-sky-400 hover:shadow-2xl hover:shadow-sky-300 opacity-85 hover:opacity-100">
			<div className="flex flex-col justify-center">
			<Link key={id} to={`/games/${id}`}>
				<h3 className=" h-10 w-30 p-1 text-3xl">{title}</h3>
				</Link>
				<div className="flex justify-center p-1 text-xs">{platform}</div>
			</div>
			{/* <ReviewByGameId id={id}/> */}
			<div className="flex justify-center overflow-hidden">
				<Link key={id} to={`/games/${id}`}>
					<img
						className="h-80"
						alt={`Cover art from ${title}`}
						src={previewImage}
					></img>
				</Link>
			</div>
			<div>
				<AverageReview game= {{id, userId, title, previewImage, genre, developer, platform}} />
			</div>
			<div className="flex justify-center p-1">{developer}</div>
			<div className="flex justify-center p-1">{genre}</div>
				{user && user.id === userId ? (
					<>
						<span className="text-slate-500 text-xs pb-1 pt-2">This is your post.</span>
					<div className="flex justify-self-end">
						<button
							className="rounded-tl-lg rounded-bl-lg h-6 w-20 text-white bg-violet-700 hover:bg-violet-500 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 "
							onClick={editGameForm}
						>
							Edit
						</button>

						<button
							className=" rounded-tr-lg rounded-br-lg h-6 w-20 text-white bg-violet-800 hover:bg-violet-600 hover:border-gray-900 hover:border-1 active:bg-violet-900  focus:outline-none focus:ring focus:ring-violet-300 "
							onClick={handleDelete}
						>
							Delete
						</button>
					</div>
					</>
				) : null}
		</div>
	);
};

export default SingleGame;
