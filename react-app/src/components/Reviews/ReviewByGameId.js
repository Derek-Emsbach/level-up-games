import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
	getAllReviewsThunk,
	deleteReviewThunk,
  editReviewThunk,
} from "../../store/reviews";

const ReviewByGameId = ({ game }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const reviews = useSelector((state) => state.review);
	const user = useSelector((store) => store.session.user);
	const sessionUser = useSelector((state) => state.session.user);
	console.log(game.id, "gameId");
	console.log(reviews, "reviews");

	const allReviews = Object.values(reviews);
	const specificReview = allReviews.filter(
		(review) => game.id === review.gameId
	);
	console.log(allReviews, "allReviews");
	console.log(specificReview, "specificReview");
	useEffect(() => {
		dispatch(getAllReviewsThunk());
	}, [dispatch]);

  const handleEditClick = (gameId) => {
		dispatch(editReviewThunk(specificReview.id));
		history.push(`/games/${gameId}`);
	};

	const handleDeleteClick = (gameId) => {
		dispatch(deleteReviewThunk(specificReview.id));
		history.push(`/games/${gameId}`);
	};
	return specificReview.map((review) => {
		return (
			<div className="review-box">
				<br></br>
				<div className="username">{review?.User?.username}</div>
				<br></br>
				{/* <div>{review.createdAt.slice(0, 10)}</div> */}
				<h1>{review.rating}/10</h1>
				<div>{review.reviewText} </div>
				<div>
					{/* <FontAwesomeIcon className="star" icon={faStar} /> */}
				</div>
				<div className="deleteButton">
					{review.userId === sessionUser?.id && (
						<>
							<button onClick={() => handleEditClick(review.id)}>
								Edit Review
							</button>
							<button
								onClick={() => handleDeleteClick(review.id)}
							>
								Delete Review
							</button>
						</>
					)}
				</div>
				<br></br>
			</div>
		);
	});
};

// 	return specificReview.map((review) => {
//     {console.log(review.reviewText)}
// 		<div className="review-box">
// 			<br></br>
// 			<div className="username">{review.rating}</div>
// 			<br></br>
// 			<div>{review.reviewText} </div>
// 			<div>{review.rating}</div>
// 			<div className="deleteButton">
// 				{review.userId === user?.id && (
// 					<button onClick={() => handleDeleteClick(review.id)}>
// 						Delete Review
// 					</button>
// 				)}
// 			</div>
// 			<br></br>
// 		</div>;
// 	});
// };

// return (
//   <>
//     <h1>{allReviews[0].rating}/10</h1>
//     <h2>{allReviews[0].reviewText}</h2>
//     <p></p>
//   </>
// )
export default ReviewByGameId;
