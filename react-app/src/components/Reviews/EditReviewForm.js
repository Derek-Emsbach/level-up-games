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
		setErrors([]);
		const payload = {
			userId,
			review_text: reviewText,
			rating,
		};

		let data = await dispatch(editReviewThunk(reviewId, payload));
		if (data.errors) {
			setErrors([...Object.values(data.errors)]);
		} else {
			history.push(`/games/${review.gameId}`);
		}
	};

	return (
		<>
			<h3>Edit Review Details</h3>
			{!!errors.length && (
          <ul>
            {errors.map((error, idx) => (
              <li className="edit-errors" key={idx}>
                {error}
              </li>
            ))}
          </ul>
        )}
			<form onSubmit={handleSubmit}>
				<label>Review</label>
				<input
					style={{ display: "block" }}
					value={reviewText}
					onChange={(e) => setReviewText(e.target.value)}
				></input>
				<label>Rating</label>
				<input
					style={{ display: "block" }}
					type="number"
					value={rating}
					// min={1}
					// max={10}
					// required
					onChange={(e) => setRating(e.target.value)}
				></input>

				<button>Edit Review!</button>
			</form>
		</>
	);
};

export default EditReviewForm;
