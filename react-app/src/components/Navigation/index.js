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
					{/* Home */}
					<img alt="logo" className="home-icon" src="https://thumbs.dreamstime.com/z/level-up-icon-creative-design-157152147.jpg"></img>
				</NavLink>
			</li>
			<li className="left_side">
				<NavLink exact to="/gameform">
					Add a Game you've played!
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
