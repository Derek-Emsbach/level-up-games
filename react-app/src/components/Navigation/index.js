import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
	const sessionUser = useSelector((state) => state.session.user);

	return (
		<ul id="navigation-bar">
			<li className="left_side">
				<NavLink exact to="/">
					Home
				</NavLink>
			</li>
			<li className="left_side">
				<NavLink exact to="/gameform">
					Add Game
				</NavLink>
			</li>
			{isLoaded && (
				<li className="right_side">
					<ProfileButton user={sessionUser} />
				</li>
			)}
			<li className="right_side">
				<NavLink exact to="/users">
					Users
				</NavLink>
			</li>
		</ul>
	);
}

export default Navigation;
