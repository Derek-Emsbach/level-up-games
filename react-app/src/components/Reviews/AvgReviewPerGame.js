import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
	getAllReviewsThunk,
	deleteReviewThunk,
	editReviewThunk,
} from "../../store/reviews";

const AverageReview = ({ game }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const reviews = useSelector((state) => state.review);
	const user = useSelector((store) => store.session.user);
	const sessionUser = useSelector((state) => state.session.user);
	const userId = sessionUser;
	let avgRating = 0;

	const allReviews = Object.values(reviews);
	const specificReview = allReviews.filter(
		(review) => game.id === review.gameId
	);


	const ratings = specificReview.map((review) => review.rating);


	const sumRating = (a, b) => a + b;

	const theSum = ratings.forEach(async (rating) => {
		// console.log(rating);
		avgRating += rating;
	});

	const testAvg = sumRating(avgRating, ratings);

	const theAvg = avgRating / ratings.length;



	useEffect(() => {
		dispatch(getAllReviewsThunk());
	}, [dispatch]);

	return (
		<>
			{theAvg > 0 && (
				<>
					<h1 className="text-3xl pt-4 pb-4 flex place-content-center justify-center justify-items-center self-center">Community Rating</h1>
					<p className="text-5xl flex place-content-center justify-center justify-items-center self-center pb-5">{Math.round(theAvg)}/10</p>
				</>
			)}
			{!theAvg && <h1 className="pt-3 pb-3 text-slate-400">No Reviews Yet</h1>}
		</>
	);
};
export default AverageReview;
