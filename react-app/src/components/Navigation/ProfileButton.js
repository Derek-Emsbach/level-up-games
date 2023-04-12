import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function ProfileButton({ user }) {
	const dispatch = useDispatch();
	const history = useHistory();
	const [showMenu, setShowMenu] = useState(false);
	const ulRef = useRef();

	const openMenu = () => {
		if (showMenu) return;
		setShowMenu(true);
	};

	useEffect(() => {
		if (!showMenu) return;

		const closeMenu = (e) => {
			if (!ulRef.current.contains(e.target)) {
				setShowMenu(false);
			}
		};

		document.addEventListener("click", closeMenu);

		return () => document.removeEventListener("click", closeMenu);
	}, [showMenu]);

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
		history.push('/');
	};

	const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
	const closeMenu = () => setShowMenu(false);

	return (
		<div className="mr-15">
			<button className="pl-5 pr-5" onClick={openMenu}>
				{/* <i style={{ color: "FFF" }} className="fa-user"></i>
				 */}
				<FontAwesomeIcon style={{ color: "04d9ff" }} icon={faUser} />
			</button>
			<ul className={ulClassName} ref={ulRef}>
				{user ? (
					<>
					<Link key={user.id} to={`/profile`}>
						<li className="text-sky-400 pr-10">{user.username}</li>
					</Link>
						<li className="text-sky-400 pr-10">{user.email}</li>
						<li>
							<button
								className="text-sky-600 pr-10"
								onClick={handleLogout}
							>
								Log Out
							</button>
						</li>
					</>
				) : (
					<>
						<OpenModalButton
							buttonText="Log In"
							onItemClick={closeMenu}
							modalComponent={<LoginFormModal />}
						/>

						<OpenModalButton
							buttonText="Sign Up"
							onItemClick={closeMenu}
							modalComponent={<SignupFormModal />}
						/>
					</>
				)}
			</ul>
		</div>
	);
}

export default ProfileButton;
