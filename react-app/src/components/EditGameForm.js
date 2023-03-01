import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editGameThunk } from "../store/games";

const EditGameForm = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { gameId } = useParams();
	const games = useSelector((state) => state.games);
	const userId = useSelector((state) => state.session.user.id);
	const specificGame = games[gameId];
	const [tooLong, setTooLong] = useState(false);
	const [title, setTitle] = useState(specificGame.title);
	const [previewImage, setPreviewImage] = useState(specificGame.previewImage);
	const [description, setDescription] = useState(specificGame.description);
	// const [releaseDate, setReleaseDate] = useState("releaseDate");
	const [developer, setDeveloper] = useState(specificGame.developer);
	const [genre, setGenre] = useState(specificGame.genre);
	const [platform, setPlatform] = useState(specificGame.platform);
	// const [errors, setErrors] = useState([]);

	useEffect(() => {
		if (setDescription.length > 1000) {
			setTooLong(true);
		} else {
			setTooLong(false);
		}
	}, [setDescription.length]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		// setErrors([]);
		const payload = {
			userId,
			title,
			previewImage,
			description,
			// release_date: releaseDate,
			developer,
			genre,
			platform,
		};

		dispatch(editGameThunk(gameId, payload));
		// if (data.errors) {
		//     setErrors([...Object.values(data.errors)]);
		//   } else {
		history.push(`/`);
		//   }
	};

	return (
		<>
			<h3>Edit Game Details</h3>
			{/* {!!errors.length && (
          <ul>
            {errors.map((error, idx) => (
              <li className="edit-errors" key={idx}>
                {error}
              </li>
            ))}
          </ul>
        )} */}
			<form onSubmit={handleSubmit}>
				<label>Title</label>
				<input
					style={{ display: "block" }}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				></input>
				<label>Preview Image</label>
				<input
					style={{ display: "block" }}
					value={previewImage}
					onChange={(e) => setPreviewImage(e.target.value)}
				></input>
				<label>Description</label>
				{/* {"condition to check for" ? "do the true version" : "do the false version"} */}
				{tooLong ? <h1>Description is too long</h1> : null}
				<textarea
					style={{ display: "block" }}
					value={description}
					onChange={(e) => {
						setDescription(e.target.value);
					}}
				></textarea>
				{/* <label>Release Date</label>
				<input
					type="date"
					style={{ display: "block" }}
					value={releaseDate}
					onChange={(e) => setReleaseDate(e.target.value)}
				></input> */}
				<label>Developer</label>
				<input
					style={{ display: "block" }}
					value={developer}
					onChange={(e) => setDeveloper(e.target.value)}
				></input>
				<label>Genre</label>
				<input
					style={{ display: "block" }}
					value={genre}
					onChange={(e) => setGenre(e.target.value)}
				></input>
				<label>Platform</label>
				<input
					style={{ display: "block" }}
					value={platform}
					onChange={(e) => setPlatform(e.target.value)}
				></input>
				<button disabled={tooLong}>Edit Game!</button>
			</form>
		</>
	);
};

export default EditGameForm;
