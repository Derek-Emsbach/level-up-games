import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/User/UsersList";
import User from "./components/User/User";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import CreateGame from "./components/CreateGame";
import AllGames from "./components/Games/AllGames";
import GameDetail from "./components/Games/GameDetail";
import EditGameForm from "./components/EditGameForm";

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		dispatch(authenticate()).then(() => setIsLoaded(true));
	}, [dispatch]);

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
					<ProtectedRoute path="/users" exact={true}>
						<UsersList />
					</ProtectedRoute>
					<ProtectedRoute path="/users/:userId" exact={true}>
						<User />
					</ProtectedRoute>
					<ProtectedRoute path="/gameform" exact={true}>
						<CreateGame />
					</ProtectedRoute>
					<ProtectedRoute path="/games/:gameId" exact={true}>
						<GameDetail />
					</ProtectedRoute>
					<ProtectedRoute path="/games/:gameId/update" exact={true}>
						<EditGameForm />
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
