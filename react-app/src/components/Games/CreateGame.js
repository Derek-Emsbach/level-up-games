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
	const [detailImage, setDetailImage] = useState("")
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
			detail_image: detailImage,
		};
		let data = await dispatch(createGameThunk(payload));

		if (data) {
			setErrors([...Object.values(data.errors)]);
		} else {
			alert("Game created succesfully!")
			history.push(`/`);
		}
	};

	const handleCancelClick = (e) => {
		e.preventDefault();

		history.push(`/`);
	};

	return (
		<div className="flex flex-col items-center bg-gradient-to-r from-slate-800 via-sky-700 to-slate-800 h-screen bg-gradient-to-r pt-20 pb-20 mb-20">
			<div className="flex flex-col justify-self-center border bg-black rounded-md w-1/3 h-fit p-5">
				<h3 className="flex justify-center text-slate-50 text-2xl pb-6">
					Add a game you've played!
				</h3>

				<div className="flex flex-row justify-center">
					<form
						className="flex flex-col justify-start"
						onSubmit={handleSubmit}
					>
						{/* <ul className="border rounded-3xl p-2 bg-slate-900">
							{errors.map((error, idx) => (
								<li className="flex justify-center text-red-600 " key={idx}>
									{error}
								</li>
							))}
						</ul> */}
						{!!errors.length && (
							<ul className="border rounded-3xl p-2 bg-slate-900">
								{errors.map((error, idx) => (
									<li
										className="flex justify-center text-red-600"
										key={idx}
									>
										{error}
									</li>
								))}
							</ul>
						)}
						<label className="text-slate-50 text-lg">Title</label>
						<input
							className="p-2 w-80 bg-slate-600 caret-pink-500"
							placeholder="Doom, Last of Us, Metal Gear Solid..."
							style={{ display: "block" }}
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						></input>
						<label className="text-slate-50 text-lg">
							Preview Image
						</label>
						<input
							className="p-2 w-80 bg-slate-600"
							placeholder="paste link of game image..."
							style={{ display: "block" }}
							value={previewImage}
							onChange={(e) => setPreviewImage(e.target.value)}
						></input>
						<label className="text-slate-50 text-lg">
							Description
						</label>
						{/* {"condition to check for" ? "do the true version" : "do the false version"} */}
						{tooLong ? <h1>Description is too long</h1> : null}
						<textarea
							className="p-2 w-80 bg-slate-600 scrollbar-hide"
							placeholder="game synopsis from your perspective..."
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
							placeholder="Nintendo, Sega, Capcom..."
							style={{ display: "block" }}
							value={developer}
							onChange={(e) => setDeveloper(e.target.value)}
						></input>
						<label className="text-slate-50 text-lg">Genre</label>
						<input
							className="p-2 w-80 bg-slate-600"
							placeholder="Action-adventure, RPG, FPS..."
							style={{ display: "block" }}
							value={genre}
							onChange={(e) => setGenre(e.target.value)}
						></input>
						<label className="text-slate-50 text-lg">
							Platform
						</label>
						<input
							className="p-2 w-80 bg-slate-600"
							placeholder="PS5, PC, NES, Gamecube..."
							style={{ display: "block" }}
							value={platform}
							onChange={(e) => setPlatform(e.target.value)}
						></input>
						<label className="text-slate-50 text-lg">
							Screenshot
						</label>
						<input
							className="p-2 w-80 bg-slate-600"
							placeholder="Optional. Add a screenshot!..."
							style={{ display: "block" }}
							value={detailImage}
							onChange={(e) => setDetailImage(e.target.value)}
						></input>
						<div className="p-4 pt-8 flex flex-col justify-center text-lg">
							<button
								className="text-slate-50 rounded-tl-lg rounded-tr-lg bg-purple-700 hover:bg-purple-900 p-1"
								disabled={tooLong}
							>
								Add Game!
							</button>
							<button
								className="text-slate-50 rounded-bl-lg rounded-br-lg bg-gray-600 hover:bg-gray-900 p-1"
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

export default CreateGame;
