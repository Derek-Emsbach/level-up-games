import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createGameThunk } from "../../store/games";
import { useHistory } from "react-router-dom";

const CreateGame = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [title, setTitle] = useState("");
	const [previewImage, setPreviewImage] = useState("");
	const [description, setDescription] = useState("");
	// const [releaseDate, setReleaseDate] = useState("");
	const [developer, setDeveloper] = useState("");
	const [genre, setGenre] = useState("");
	const [platform, setPlatform] = useState("");
	const [tooLong, setTooLong] = useState(false);

	useEffect(() => {
		if (description.length > 1000) {
			setTooLong(true);
		} else {
			setTooLong(false);
		}
	}, [description.length]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			title,
			preview_image: previewImage,
			description,
			// release_date: releaseDate,
			developer,
			genre,
			platform,
		};

		dispatch(createGameThunk(data));
		history.push("/");
	};

	return (
		<>
			<h3>Add a game you've played!</h3>
			<form onSubmit={handleSubmit}>
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
				{/* <label>Release Date</label>
				<input
					type="date"
					style={{ display: "block" }}
					value={releaseDate}
					onChange={(e) => setReleaseDate(e.target.value)}
				></input> */}
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
			</form>
		</>
	);
};

export default CreateGame;
