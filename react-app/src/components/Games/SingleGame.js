import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { deleteGameThunk } from "../../store/games";
import ReviewByGameId from "../Reviews/ReviewByGameId";
import "./AllGames.css";

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
		<div className="game-container">
			<h3 className="game-title">{title}</h3>
			<div>{platform}</div>
			{/* <ReviewByGameId id={id}/> */}

			<div className="img-container">
				<Link key={id} to={`/games/${id}`}>
					<img
						className="game-image"
						alt={`Cover art from ${title}`}
						src={previewImage}
					></img>
				</Link>
			</div>
			<div>{developer}</div>
			<div>{genre}</div>
			{user && user.id === userId ? (
				<>
					<button onClick={editGameForm}>Edit</button>
					<button onClick={handleDelete}>Delete</button>
				</>
			) : null}
		</div>
	);
};

export default SingleGame;
