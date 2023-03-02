import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
	getAllReviewsThunk,
	deleteReviewThunk,
	getAllReviewsByGameId,
} from "../../store/reviews";

const ReviewByGameId = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const reviews = useSelector((state) => state.review);
	const user = useSelector((store) => store.session.user);
  const {gameId} = useParams()
	console.log(reviews);

	const allReviews = Object.values(reviews);
	const specificReview = allReviews.filter(
		(review) => review.gameId === gameId
	);
	console.log(allReviews);
	useEffect(() => {
		dispatch(getAllReviewsThunk());
	}, [dispatch]);

	const handleDeleteClick = (gameId) => {
	  dispatch(deleteReviewThunk(specificReview.id));
		history.push(`/games/${gameId}`);
	}

	return (
    <>
      {/* <h1>{allReviews[0].reviewText}</h1> */}
      {/* <h3>{allReviews[0].rating}</h3> */}
    </>
	)
	// return specificReview.map((review) => {
	// 	<div className="review-box">
	// 		<br></br>
	// 		{/* <div className="username">{review?.user?.username}</div> */}
	// 		<br></br>
	// 		<div>{review.reviewText} </div>
	// 		<div>{review.rating}</div>
	// 		<div className="deleteButton">
  //                   {review.userId === user?.id && (
  //                     <button  onClick={() => handleDeleteClick(review.id)}>
  //                       Delete Review
  //                     </button>

  //                   )}
  //                 </div>
	// 		<br></br>
	// 	</div>;
	// });
};

export default ReviewByGameId;
