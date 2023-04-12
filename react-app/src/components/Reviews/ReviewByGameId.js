import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
	getAllReviewsThunk,
	getAllReviewsByGameId,
	deleteReviewThunk,
	editReviewThunk,
} from "../../store/reviews";
import { getOneUserThunk } from "../../store/users";

const ReviewByGameId = ({ game }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const reviews = useSelector((state) => state.review);
	const user = useSelector((store) => store.user);
	const sessionUser = useSelector((state) => state.session.user);
	const userId = sessionUser


	const allReviews = Object.values(reviews);
	const specificReview = allReviews.filter(
		(review) => game.id === review.gameId
	);
	const reviewer = specificReview.userId



	useEffect(() => {
		dispatch(getAllReviewsThunk());
		dispatch(getAllReviewsByGameId(game.id))
		dispatch(getOneUserThunk(reviews.userId));
	}, [dispatch]);


	const handleEditClick = () => {
		history.push(`/reviews/${specificReview[0].id}/update`);
	};

	const handleDeleteClick = () => {
		const reviewById = specificReview.filter((userReview) => userReview.userId === sessionUser.id)
		const reviewToDelete = reviewById[0].id
		if(reviewById.length > 0){
			dispatch(deleteReviewThunk({reviewToDelete, user_id: userId.id}));
		}
	};






	return specificReview.map((review) => {
		return (
			<div className="flex flex-col justify-center justify-items-center self-center bg-slate-700  mt-8 rounded-lg w-full h-fit text-slate-200 shadow-md shadow-sky-300">
				<br></br>
				<div className="text-xl p-5">{user.username}</div>
				<br></br>
				{/* <div>{review.createdAt.slice(0, 10)}</div> */}
				<h1 className="text-6xl p-10 justify-center">{review.rating}/10</h1>
				<div className="text-xl p-4">{review.reviewText} </div>
				<div>
					{/* <FontAwesomeIcon className="star" icon={faStar} /> */}
				</div>
				<div className="deleteButton">
					{review.userId === sessionUser?.id && (
						<div className="p-6">
							<button className="rounded-none bg-purple-700 w-20 hover:bg-purple-900 " onClick={handleEditClick}>Edit</button>
							<button className="rounded-none bg-red-700 w-20 hover:bg-red-900" onClick={handleDeleteClick}>Delete</button>
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
