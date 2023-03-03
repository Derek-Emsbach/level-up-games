const defaultState = {};

const LOAD_REVIEWS = "reviews/LOAD_REVIEWS";
const DELETE_REVIEW = "reviews/DELETE_REVIEW"

const loadReviews = (reviews) => {
    return {
        type: LOAD_REVIEWS,
        payload: reviews,
    }
}

const deleteReview = (review) => {
    return {
        type:DELETE_REVIEW,
        payload: review
    }
}

export const getAllReviewsThunk = () => async (dispatch) => {
    const res = await fetch("/api/reviews");

	if (res.ok) {
		const reviews = await res.json();
		dispatch(loadReviews(reviews));
		return reviews;
	}
}

export const getAllReviewsByGameId = (gameId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${gameId}`);

    if (response.ok) {
      const review = await response.json();
      dispatch(loadReviews(review));
      return review
    }
  };

export const createReviewThunk = (data) => async (dispatch) => {
	const reviewData = JSON.stringify(data);

	const res = await fetch("/api/reviews", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: reviewData,
	});

	if (res.ok) {
		const newReview = await res.json();
		dispatch(loadReviews(newReview));
	}
};

export const editReviewThunk = (id, data) => async (dispatch) => {
	const editReview = JSON.stringify(data);

	const res = await fetch(`/api/reviews/${id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: editReview,
	});

	if (res.ok) {
		const newData = await res.json();
		dispatch(loadReviews(newData));
	}
};

export const deleteReviewThunk = (reviewId) => async (dispatch) => {
	const body = JSON.stringify(reviewId);

	const res = await fetch(`/api/reviews/${reviewId}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body,
	});

	if (res.ok) {
		dispatch(deleteReview(reviewId));
	}
};

const reviewReducer = (state = defaultState, action) => {
	let newState = { ...state };

	switch (action.type) {
		case LOAD_REVIEWS:
			return { ...newState, ...action.payload };

		case DELETE_REVIEW:
			delete newState[action.payload];
			return newState;

		default:
			return state;
	}
};

export default reviewReducer;
