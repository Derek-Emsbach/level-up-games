import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
	editReviewThunk,
	getAllReviewsThunk,
	getSingleReview,
} from "../../store/reviews";

const EditReviewForm = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { reviewId } = useParams();
	const userId = useSelector((state) => state.session.user.id);
	const review = useSelector((state) => state.review[reviewId]);
	const [reviewText, setReviewText] = useState(review.reviewText);
	const [rating, setRating] = useState(review.rating);
	const [errors, setErrors] = useState([]);




	const handleSubmit = async (e) => {
		e.preventDefault();
		// setErrors([]);
		const payload = {
			userId,
			review_text: reviewText,
			rating,
		};

		let data = await dispatch(editReviewThunk(reviewId, payload));

		if (data) {
			setErrors([...Object.values(data.errors)]);
		} else {
			history.push(`/games/${review.gameId}`);
		}
	};

	const handleCancelClick = (e) => {
		e.preventDefault();

		history.push(`/`);
	};

	return (
		<div className="flex flex-col items-center bg-gradient-to-r from-slate-800 via-sky-700 to-slate-800 h-screen bg-gradient-to-r pt-20 pb-20 mb-20 h-screen pt-20 pb-80">
			<div className="flex flex-col justify-self-center border bg-black rounded-md w-1/3 h-fit p-5 ">
				<h3 className="flex justify-center text-slate-50 text-2xl pb-6">
					Edit Review Details
				</h3>
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
				<div className="flex flex-row justify-center">
					<form
						className="flex flex-col justify-start"
						onSubmit={handleSubmit}
					>
						<label className="text-slate-50 text-lg">Review</label>
						<input
							className="p-2 w-80 bg-slate-600"
							value={reviewText}
							onChange={(e) => setReviewText(e.target.value)}
						></input>
						<label className="text-slate-50 text-lg">Rating</label>
						<input
							className="p-2 w-80 bg-slate-600"
							type="number"
							value={rating}
							// min={1}
							// max={10}
							// required
							onChange={(e) => setRating(e.target.value)}
						></input>

						<button className="mt-10 text-slate-50 rounded-tl-lg rounded-tr-lg bg-sky-700 hover:bg-sky-900 p-1">
							Edit Review!
						</button>
						<button
							className="mb-10 text-slate-50 rounded-bl-lg rounded-br-lg bg-gray-500 hover:bg-gray-700 p-1 pb-2"
							type="button"
							onClick={handleCancelClick}
						>
							Cancel
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditReviewForm;
