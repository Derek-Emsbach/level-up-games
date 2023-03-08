import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGameThunk } from "../../store/games";
import { useHistory } from "react-router-dom";

const CreateGame = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.session.user.id);

	const [title, setTitle] = useState("");
	const [previewImage, setPreviewImage] = useState("");
	const [description, setDescription] = useState("");
	const [developer, setDeveloper] = useState("");
	const [genre, setGenre] = useState("");
	const [platform, setPlatform] = useState("");
	const [tooLong, setTooLong] = useState(false);
	const [errors, setErrors] = useState([]);

	useEffect(() => {
		if (description.length > 1000) {
			setTooLong(true);
		} else {
			setTooLong(false);
		}
	}, [description.length]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors([]);
		const payload = {
			title,
			preview_image: previewImage,
			description,
			developer,
			genre,
			platform,
		};
		let data = await dispatch(createGameThunk(payload));

		if (data) {
			setErrors([...Object.values(data.errors)]);
		} else {
			history.push(`/`);

		}
	};

	const handleCancelClick = (e) => {
		e.preventDefault();

		history.push(`/`);
	};

	return (
		<>
			<h3>Add a game you've played!</h3>
			<form onSubmit={handleSubmit}>
				<ul>
					{errors.map((error, idx) => (
						<li className="edit-errors" key={idx}>
							{error}
						</li>
					))}
				</ul>
				<label>Title</label>
				<input
					placeholder="Doom, Last of Us, Metal Gear Solid..."
					style={{ display: "block" }}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				></input>
				<label>Preview Image</label>
				<input
					placeholder="paste link of game image..."
					style={{ display: "block" }}
					value={previewImage}
					onChange={(e) => setPreviewImage(e.target.value)}
				></input>
				<label>Description</label>
				{/* {"condition to check for" ? "do the true version" : "do the false version"} */}
				{tooLong ? <h1>Description is too long</h1> : null}
				<textarea
					placeholder="game synopsis from your perspective..."
					style={{ display: "block" }}
					value={description}
					onChange={(e) => {
						setDescription(e.target.value);
					}}
				></textarea>
				<label>Developer</label>
				<input
					placeholder="Nintendo, Sega, Capcom..."
					style={{ display: "block" }}
					value={developer}
					onChange={(e) => setDeveloper(e.target.value)}
				></input>
				<label>Genre</label>
				<input
					placeholder="Action-adventure, RPG, FPS..."
					style={{ display: "block" }}
					value={genre}
					onChange={(e) => setGenre(e.target.value)}
				></input>
				<label>Platform</label>
				<input
					placeholder="PS5, PC, NES, Gamecube..."
					style={{ display: "block" }}
					value={platform}
					onChange={(e) => setPlatform(e.target.value)}
				></input>
				<button disabled={tooLong}>Add Game!</button>
				<button type="button" onClick={handleCancelClick}>
					Cancel
				</button>
			</form>
		</>
	);
};

export default CreateGame;
