import { useState, useEffect } from "react";

const CreateGame = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [tooLong, setTooLong] = useState(false);

	useEffect(() => {
		if (description.length > 10) {
			setTooLong(true);
		} else {
			setTooLong(false);
		}
	}, [description.length]);

	return (
		<>
			<div>
				<h3>
					Add a game you've played so you can review it or add it to a
					list!
				</h3>
				<label>Title</label>
				<input
					style={{ display: "block" }}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
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
			</div>
		</>
	);
};

export default CreateGame;
