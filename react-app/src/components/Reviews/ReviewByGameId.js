import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { useEffect } from "react";
import { getAllReviewsThunk, deleteReviewThunk } from "../../store/reviews";

const ReviewByGameId = ({
  id, userId, title, previewImage, genre, developer, platform,
}) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { gameId } = useParams()
  const reviews = useSelector(state =>state.reviews)
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getAllReviewsThunk());
	}, [dispatch]);

  // const allReviews = Object.values(reviews)
  // const specificReview = allReviews.filter(review =>review.gameId === id)

	const handleDeleteClick = (id) => {
    dispatch(deleteReviewThunk(id));
		history.push(`/games/${id}`);
	};
  console.log(gameId, "gameId")
  console.log(reviews, "reviews")
  console.log(sessionUser, "sessionUser")
  return <h3>Reviews</h3>
}
  {/* return (specificReview.map(review =>{
    return (
      <div className="review-box">
        <br></br>
              <div className="username">{review?.User?.username}</div>
              <br></br>
              <div>{review.createdAt.slice(0, 10)}</div>
              <div>{review.review} </div>
              <div>

                {review.rating}
                </div>
                <div className="deleteButton">
                  {review.userId === sessionUser?.id && (
                    <button  onClick={() => handleDeleteClick(review.id)}>
                      Delete Review
                    </button>

                  )}
                </div>
              <br></br>
      </div>
    )
})
  ) */}


export default ReviewByGameId
