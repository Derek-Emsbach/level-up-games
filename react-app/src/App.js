import React, { useState, useEffect, useSelector } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/User/UsersList";
import User from "./components/User/User";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import AllGames from "./components/Games/AllGames";
import GameDetail from "./components/Games/GameDetail";
import CreateGame from "./components/Games/CreateGame";
import CreateReview from "./components/Reviews/CreateReview";
import EditGameForm from "./components/Games/EditGameForm";
import EditReviewForm from "./components/Reviews/EditReviewForm";
import HomePage from "./components/HomePage/HomePage";

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	const user = useSelector((state) => state.session.user);

	// useEffect(() => {
	// 	dispatch(authenticate()).then(() => setIsLoaded(true));
	// }, [dispatch]);

	useEffect(() => {
		(async () => {
			await dispatch(authenticate());
			setIsLoaded(true);
		})();
	}, [dispatch]);


	if (!isLoaded) {
		return null;
	}

	return (
		<>
			<Navigation isLoaded={isLoaded} />
			{isLoaded && (
				<Switch>
					<Route path="/" exact={true}>
						<AllGames />
					</Route>
					<Route path="/login">
						<LoginFormPage />
					</Route>
					<Route path="/signup">
						<SignupFormPage />
					</Route>
					<ProtectedRoute path="/gameform" exact={true}>
						<CreateGame />
					</ProtectedRoute>
					<ProtectedRoute path="/games/:gameId" exact={true}>
						<GameDetail />
					</ProtectedRoute>
					<ProtectedRoute path="/games/:gameId/update" exact={true}>
						<EditGameForm />
					</ProtectedRoute>
					<ProtectedRoute path="/reviewform" exact={true}>
						<CreateReview />
					</ProtectedRoute>
					<ProtectedRoute
						path="/reviews/:reviewId/update"
						exact={true}
					>
						<EditReviewForm />
					</ProtectedRoute>
					<Route>
						<h1>Temporary 404</h1>
					</Route>
				</Switch>
			)}
		</>
	);
}

export default App;
