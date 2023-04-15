import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
	getAllReviewsThunk,
	getAllReviewsByGameId,
	deleteReviewThunk,
	editReviewThunk,
} from "../../store/reviews";
import { getOneUserThunk } from "../../store/users";

const ReviewByUserId = ({ users, review }) => {
    console.log(users, review)


    function getUsername(users, review) {
        for (let i = 0; i < users.length; i++) {
          if (users[i].id === review.userId) {
            return users[i].username;
          }
        }
        return null; // if user is not found
      }

    const setUserReviewer = getUsername(users, review)

	return (
        <>
            <h1>{setUserReviewer}'s Review</h1>
        </>

    )
};

export default ReviewByUserId;
