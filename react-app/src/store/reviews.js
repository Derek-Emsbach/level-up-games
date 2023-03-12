const defaultState = {};

const LOAD_REVIEWS = "reviews/LOAD_REVIEWS";
const LOAD_ONE_REVIEW = "reviews/LOAD_ONE_REVIEW"
const DELETE_REVIEW = "reviews/DELETE_REVIEW"

const loadReviews = (reviews) => {
    return {
        type: LOAD_REVIEWS,
        payload: reviews,
    }
}

const loadOneReview = (reviews) => {
	return {
	  type: LOAD_ONE_REVIEW,
	  reviews,
	};
  };

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

export const getSingleReview = (reviewId) => async (dispatch) => {
	const response = await fetch(`/api/reviews/${reviewId}`);

	if (response.ok) {
		const {review} = await response.json();
		dispatch(loadOneReview(review));
		return review;
	}
};

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
	} else {
		const error = await res.json();
		return error;
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
	} else {
		const error = await res.json();

		return error;
	}

};

export const deleteReviewThunk = (data) => async (dispatch) => {
	const body = JSON.stringify(data);
	


	const res = await fetch(`/api/reviews/${data.reviewToDelete}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body,
	});

	if (res.ok) {
		dispatch(deleteReview(data.reviewToDelete));
	}
};

const reviewReducer = (state = defaultState, action) => {
	let newState = { ...state };

	switch (action.type) {
		case LOAD_REVIEWS:
			return { ...newState, ...action.payload };

		case LOAD_ONE_REVIEW:
			newState[action.review] = action.review;
			return newState;

		case DELETE_REVIEW:
			delete newState[action.payload];
			return newState;

		default:
			return state;
	}
};

export default reviewReducer;
