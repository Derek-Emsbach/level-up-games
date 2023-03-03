import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { createReviewThunk } from "../../store/reviews"



const ReviewForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { gameId } = useParams()
  const sessionUser = useSelector((state) => state.session.user);
  const userId = useSelector((state) => state.session.user.id)


  const [rating, setRating] = useState(0)
  const [reviewText, setReviewText] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      userId,
      reviewText,
      rating
    }

    let newReview = await dispatch(createReviewThunk(data))
    console.log(newReview, "newReview")
    if(newReview) {
      history.push(`/games/${gameId}`)
    }
  }

  const handleCancelClick = (e) => {
    e.preventDefault();

    history.push(`/games/${gameId}`)
  };

  return (
    <div>
      <form className="create-review-form" onSubmit={handleSubmit}>
        <h1>Played this game before?</h1>
        <label>Describe your experience</label>
        <textarea
          type="textarea"
          placeholder="write about your experience here..."
          value={reviewText}
          required
          onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
        <label>Rate your experience</label>
        <input
          type="number"
          placeholder="enter rating 1-10..."
          value={rating}
          min={1}
          max={10}
          required
          onChange={(e) => setRating(e.target.value)}
          />
        <button type="submit">Create Review</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </div>
  )
}

export default ReviewForm
