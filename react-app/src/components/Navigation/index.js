import React from "react";
import { Link, NavLink, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navigation.css";
import { faGamepad, faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";

function Navigation({ isLoaded }) {
	const sessionUser = useSelector((state) => state.session.user);

	return (
		<div className="sticky top-0 flex flex-col justify-between content-center justify-self-center bg-slate-900 py-3 text-neutral-200 shadow-lg">
			<div className="flex justify-between content-center px-6 bg-slate-900">
				<ul className="flex justify-between content-center w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-slate-900">
					<div className="flex justify-between">
						<li className="w-50">
							<NavLink exact to="/">
								{/* Home */}
								<FontAwesomeIcon
									style={{ color: "04d9ff"}}
									className="fa-5x animate-pulse"
									icon={faArrowTurnUp}
								/>
								{/* <img
								alt="logo"
								className="h-6 mr-3 sm:h-9"
								src="https://thumbs.dreamstime.com/z/level-up-icon-creative-design-157152147.jpg"
							></img> */}
							</NavLink>
						</li>
						<li className="flex justify-between pl-5">
							<div className="flex flex-row justify-evenly gap-x-3 text-xl font-semibold dark:text-white">
								<h1 className="text-5xl font-bold">LEVEL UP</h1>
								<h3 className="flex content-center text-3xl underline decoration-sky-400 decoration-double underline-offset-4">
									Game Reviews
								</h3>
							</div>
						</li>
					</div>
					<li>
						<div className="hover:animate-pulse hover:text-white text-sky-400 font-semibold hover:text-white py-2 px-2">
							<a href="https://github.com/Derek-Emsbach">About the Creator</a>
						</div>
					</li>
					<div>
						<li className="rounded-full mt-2 bg-transparent hover:bg-indigo-600 hover:animate-pulse hover:text-white text-sky-400 font-semibold py-2 px-4 hover:border-transparent rounded">
							<NavLink exact to="/gameform">
								<div className="flex flex-row self-center">
									<div className="pr-5">
										<FontAwesomeIcon
											className=" fa-2x"
											icon={faGamepad}
										/>
									</div>
									<div>Add a Game!</div>
								</div>
							</NavLink>
						</li>
					</div>
					<div>
						{isLoaded && (
							<li className="p-2 mt-2 mr-20 m-25 rounded-full ring-2 ring-gray-300 dark:ring-sky-500">
								<ProfileButton user={sessionUser} />
							</li>
						)}
					</div>
				</ul>
			</div>
		</div>
	);
}

export default Navigation;
