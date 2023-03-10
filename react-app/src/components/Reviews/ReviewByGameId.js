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
	const userId = sessionUser.id

	const allReviews = Object.values(reviews);
	const specificReview = allReviews.filter(
		(review) => game.id === review.gameId
	);


	useEffect(() => {
		dispatch(getAllReviewsThunk());
	}, [dispatch]);


	const handleEditClick = () => {
		history.push(`/reviews/${specificReview[0].id}/update`);
	};

	const handleDeleteClick = () => {
		const reviewById = specificReview.filter((userReview) => userReview.userId === sessionUser.id)
		const reviewToDelete = reviewById[0].id
		if(reviewById.length > 0){
			dispatch(deleteReviewThunk({reviewToDelete, user_id: userId}));
		}
	};
	return specificReview.map((review) => {
		return (
			<div className="flex flex-col justify-center justify-items-center self-center">
				<br></br>
				<div className="text-lg">{review?.User?.username}</div>
				<br></br>
				{/* <div>{review.createdAt.slice(0, 10)}</div> */}
				<h1 className="text-4xl p-10">{review.rating}/10</h1>
				<div className="text-xl p-4">{review.reviewText} </div>
				<div>
					{/* <FontAwesomeIcon className="star" icon={faStar} /> */}
				</div>
				<div className="deleteButton">
					{review.userId === sessionUser?.id && (
						<div className="p-6">
							<button className="rounded-none bg-purple-700 w-20" onClick={handleEditClick}>Edit</button>
							<button className="rounded-none bg-red-900 w-20" onClick={handleDeleteClick}>Delete</button>
						</div>
					)}
				</div>
				<br></br>
			</div>
		);
	});
};

// 	return specificReview.map((review) => {
//
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
