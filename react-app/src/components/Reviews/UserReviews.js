import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGamesThunk } from "../../store/games";
import { getAllReviewsThunk } from "../../store/reviews";

const UserReviews = ({ user }) => {
	const dispatch = useDispatch();
	const currentUser = user;

	const reviews = useSelector((state) => Object.values(state.review));
	const games = useSelector((state) => Object.values(state.games));

	const userReviews = reviews.filter(
		(review) => review.userId === currentUser.id
	);

    // const findGameTitle = (ele) => {
    //     const gameTitle = games.filter(
    //         (game) => game.id === ele.id
    //     )
    //     console.log(gameTitle[0])
    // }
    const findGameTitle = (ele) => {
        const game = games.find((game) => game.id === ele.id);
        return game ? game.title : "";
    };

	useEffect(() => {
		dispatch(getAllGamesThunk());
	}, [dispatch]);

	const handleEditClick = () => {
		return null;
	};

	const handleDeleteClick = () => {
		return null;
	};

	return (
		<div className="flex flex-col justify-center">
			<h1 className="flex flex-col justify-center text-7xl font-extrabold text-slate-900">
				My Reviews
			</h1>
			{userReviews.map((review) => (
                <>
                <div>

                </div>
				<div
					key={review.id}
					className="flex flex-col items-center justify-center content-center bg-slate-800 text-slate-200 rounded-3xl items-center w-3/5 h-70 p-8 pt-6 pb-8 mt-6 mb-6 hover:border-4 border-violet-500 hover:shadow-2xl hover:shadow-violet-400 opacity-85 hover:opacity-100"
                    >

                    <h2 className="text-3xl justify-center pb-5">{findGameTitle(review)}</h2>
					<h3 className="text-xl pb-5">{review.rating}/10</h3>
					<p>{review.reviewText}</p>
					<div className="p-6">
						<button
							className="rounded-none bg-purple-700 w-20 hover:bg-purple-900 "
							onClick={handleEditClick}
						>
							Edit
						</button>
						<button
							className="rounded-none bg-red-700 w-20 hover:bg-red-900"
							onClick={handleDeleteClick}
						>
							Delete
						</button>
					</div>
				</div>
                </>
			))}
		</div>
	);
};

export default UserReviews;
