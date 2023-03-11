import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createReviewThunk } from "../../store/reviews";

const ReviewForm = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { gameId } = useParams();
	const sessionUser = useSelector((state) => state.session.user);

	const [rating, setRating] = useState(0);
	const [reviewText, setReviewText] = useState("");
	const [errors, setErrors] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors([]);
		const payload = {
			game_id: gameId,
			review_text: reviewText,
			rating,
		};
		let data = await dispatch(createReviewThunk(payload));

		if (data) {
			setErrors([...Object.values(data.errors)]);
		} else {
			history.push(`/games/${gameId}`);
		}
	};

	const handleCancelClick = (e) => {
		e.preventDefault();
		setRating(0);
		setReviewText("");

		history.push(`/games/${gameId}`);
	};
	return (
		<div className="flex justify-center h-screen bg-gradient-to-r from-slate-900 to-violet-700 pt-20 pb-80">
			<div className="flex flex-col justify-self-center border bg-black rounded-md w-1/3  p-5">
				<h1 className="flex justify-center text-slate-50 text-2xl pb-6">
					Played this game before?
				</h1>

				<div className="flex flex-row justify-center">
					<form
						className="flex flex-col justify-start"
						onSubmit={handleSubmit}
					>
						{!!errors.length && (
					<ul className="border rounded-3xl p-2 bg-slate-900">
						{errors.map((error, idx) => (
							<li className="flex justify-center text-red-600" key={idx}>
								{error}
							</li>
						))}
					</ul>
				)}
						<label className="text-slate-50 text-lg">
							Describe your experience
						</label>
						<textarea
							className="p-2 w-80 bg-slate-600 scrollbar-hide"
							type="textarea"
							placeholder="write about your experience here..."
							value={reviewText}
							onChange={(e) => setReviewText(e.target.value)}
						></textarea>
						<label className="text-slate-50 text-lg">
							Rate your experience
						</label>
						<input
							className="p-2 w-80 bg-slate-600"
							type="number"
							placeholder="enter rating 1-10..."
							value={rating}
							onChange={(e) => setRating(e.target.value)}
						/>
						<button className="text-slate-50 rounded-tl-lg rounded-tr-lg bg-purple-700 hover:bg-purple-900 p-1 mt-6">Create Review</button>
						<button className="text-slate-50 rounded-bl-lg rounded-br-lg bg-gray-600 hover:bg-gray-900 p-1" type="button" onClick={handleCancelClick}>
							Cancel
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ReviewForm;
