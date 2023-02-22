import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/User/UsersList';
import User from './components/User/User';
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";

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
					<ProtectedRoute path="/" exact={true}>
						<h1>My Home Page</h1>
					</ProtectedRoute>
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
				</Switch>
			)}
		</>
	);
}

export default App;