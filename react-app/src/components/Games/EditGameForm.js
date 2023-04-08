import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editGameThunk } from "../../store/games";

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
	const [developer, setDeveloper] = useState(specificGame.developer);
	const [genre, setGenre] = useState(specificGame.genre);
	const [platform, setPlatform] = useState(specificGame.platform);
	const [errors, setErrors] = useState([]);

	useEffect(() => {
		if (setDescription.length > 1000) {
			setTooLong(true);
		} else {
			setTooLong(false);
		}
	}, [setDescription.length]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const payload = {
			title,
			preview_image: previewImage,
			description,
			developer,
			genre,
			platform,
		};

		let data = await dispatch(editGameThunk(gameId, payload));

		if (data) {
			setErrors([...Object.values(data.errors)]);
		} else {
			alert("Game Edit successful!")
			history.push(`/games/${gameId}`);
		}
	};

	const handleCancelClick = (e) => {
		e.preventDefault();

		history.push(`/`);
	};

	return (
		<div className="flex flex-col items-center bg-gradient-to-r from-slate-800 via-sky-700 to-slate-800 h-screen pt-20 pb-20 mb-20 h-screen pt-20 pb-40">
			<div className="flex flex-col justify-self-center border bg-black rounded-md w-1/3 h-fit p-5 ">
				<h3 className="flex justify-center text-slate-50 text-2xl pb-6">
					Edit Game Details
				</h3>
				{!!errors.length && (
					<ul className="border rounded-3xl p-2 bg-slate-900">
						{errors.map((error, idx) => (
							<li className="flex justify-center text-red-600" key={idx}>
								{error}
							</li>
						))}
					</ul>
				)}
				<div className="flex flex-row justify-center">
					<form
						className="flex flex-col justify-start"
						onSubmit={handleSubmit}
					>
						<label className="text-slate-50 text-lg">Title</label>
						<input
						className="p-2 w-80 bg-slate-600"
							style={{ display: "block" }}
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						></input>
						<label className="text-slate-50 text-lg">
							Preview Image
						</label>
						<input
						className="p-2 w-80 bg-slate-600"
							style={{ display: "block" }}
							value={previewImage}
							onChange={(e) => setPreviewImage(e.target.value)}
						></input>
						<label className="text-slate-50 text-lg ">
							Description
						</label>
						{/* {"condition to check for" ? "do the true version" : "do the false version"} */}
						{tooLong ? <h1>Description is too long</h1> : null}
						<textarea
						className="p-2 w-80 bg-slate-600 h-fit scrollbar-hide"
							style={{ display: "block" }}
							value={description}
							onChange={(e) => {
								setDescription(e.target.value);
							}}
						></textarea>
						<label className="text-slate-50 text-lg">
							Developer
						</label>
						<input
						className="p-2 w-80 bg-slate-600"
							style={{ display: "block" }}
							value={developer}
							onChange={(e) => setDeveloper(e.target.value)}
						></input>
						<label className="text-slate-50 text-lg">Genre</label>
						<input
						className="p-2 w-80 bg-slate-600"
							style={{ display: "block" }}
							value={genre}
							onChange={(e) => setGenre(e.target.value)}
						></input>
						<label className="text-slate-50 text-lg">
							Platform
						</label>
						<input
						className="p-2 w-80 bg-slate-600"
							style={{ display: "block" }}
							value={platform}
							onChange={(e) => setPlatform(e.target.value)}
						></input>
						<div className="p-4 pt-8 flex flex-col justify-center text-lg">
							<button
								className="text-slate-50 rounded-tl-lg rounded-tr-lg bg-sky-700 hover:bg-sky-900 p-1"
								disabled={tooLong}
							>
								Edit Game!
							</button>
							<button
								className="text-slate-50 rounded-bl-lg rounded-br-lg bg-gray-500 hover:bg-gray-700 p-1 pb-2"
								type="button"
								onClick={handleCancelClick}
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditGameForm;
