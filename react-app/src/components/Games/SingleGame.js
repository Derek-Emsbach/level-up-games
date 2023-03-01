import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteGameThunk } from "../../store/games";
import "./AllGames.css";

const SingleGame = ({
	game: { id, userId, title, previewImage, genre, developer, platform },
}) => {
	// const {showEdit, setShowEdit} = useState(false)
	const history = useHistory();
	const dispatch = useDispatch();

	const user = useSelector((state) => state.session.user);

	const editGameForm = () => {
		history.push(`games/${id}/update`);
	};

	const handleDelete = () => {
		dispatch(deleteGameThunk({ id, user_id: userId }));
	};

	const gameDetails = () => {
		history.push(`games`);
	};

	return (
		<div className="game-container">
			<h3 className="game-title">{title}</h3>
			<div>{platform}</div>
			<div>Rating: TBD</div>

			<div className="img-container">
				<img
					className="game-image"
					alt={`Cover art from ${title}`}
					src={previewImage}
				></img>
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
