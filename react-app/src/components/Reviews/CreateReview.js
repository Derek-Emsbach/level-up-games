import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createReviewThunk } from "../../store/reviews";

const ReviewForm = () => {
	const dispatch = useDispatch();
	const history = useHistory();
  const {gameId} = useParams()
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
		}
    else {
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
		<div>
			<h1>Played this game before?</h1>

			<form className="create-review-form" onSubmit={handleSubmit}>
				{/* {!!errors.length && (
					<>
						<ul>
							{errors.map((error, idx) => (
								<li className="edit-errors" key={idx}>
									{console.log(error)}
								</li>
							))}
						</ul>
					</>
				)} */}
        <ul>
					{errors.map((error, idx) => (
						<li className="edit-errors" key={idx}>
							{error}
						</li>
					))}
				</ul>
				<label>Describe your experience</label>
				<textarea
        style={{ display: "block" }}
					type="textarea"
					placeholder="write about your experience here..."
					value={reviewText}
					onChange={(e) => setReviewText(e.target.value)}
				></textarea>
				<label>Rate your experience</label>
				<input
        style={{ display: "block" }}
					type="number"
					placeholder="enter rating 1-10..."
					value={rating}
					onChange={(e) => setRating(e.target.value)}
				/>
				<button>Create Review</button>
				<button type="button" onClick={handleCancelClick}>
					Cancel
				</button>
			</form>
		</div>
	);
};

export default ReviewForm;
