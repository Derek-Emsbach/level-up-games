import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import "./SignupForm.css";

function SignupFormPage() {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);

	if (sessionUser) return <Redirect to="/" />;

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			const data = await dispatch(signUp(username, email, password));
			if (data) {
				setErrors(data);
			}
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};

	return (
		<div className="flex justify-center h-screen bg-gradient-to-r from-slate-900 to-violet-700 pt-20 pb-80">
			<div className="flex flex-row justify-center p-20">
				<NavLink exact to="/">
					<FontAwesomeIcon
						style={{ color: "04d9ff"  }}
						className="fa-4x animate-pulse"
						icon={faArrowTurnUp}
					/>
				</NavLink>
				<h2 className="text-8xl text-slate-200">Level up</h2>
				<h3 className="text-slate-200 text-3xl underline decoration-sky-500 decoration-double underline-offset-8">
					Game Reviews
				</h3>
			</div>
			<div className="flex flex-col justify-self-center border bg-black rounded-md h-fit w-fill p-5">
				<h1 className="flex justify-center text-slate-50 text-2xl pb-6 h-fit">
					Sign Up
				</h1>
				<form className="flex flex-col h-fit" onSubmit={handleSubmit}>
				{!!errors.length && (
					<ul className="border rounded-3xl p-2 bg-slate-900">
						{errors.map((error, idx) => (
							<li className="flex justify-center text-red-600" key={idx}>
								{error}
							</li>
						))}
					</ul>
				)}
					<label className="flex flex-col text-slate-50 text-lg p-2">
						Email
						<input
							className="p-2 w-80 bg-slate-600 m-2"
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
					<label className="flex flex-col text-slate-50 text-lg p-2">
						Username
						<input
							className="p-2 w-80 bg-slate-600 m-2"
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</label>
					<label className="flex flex-col text-slate-50 text-lg p-2">
						Password
						<input
							className="p-2 w-80 bg-slate-600 m-2"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
					<label className="flex flex-col text-slate-50 text-lg p-2">
						Confirm Password
						<input
							className="p-2 w-80 bg-slate-600 m-2"
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</label>
					<button
						className="text-slate-50 rounded-lg bg-purple-700 hover:bg-purple-900 p-1 mt-6"
						type="submit"
					>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
}

export default SignupFormPage;
