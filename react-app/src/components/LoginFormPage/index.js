import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import "./LoginForm.css";

function LoginFormPage() {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

	if (sessionUser) return <Redirect to="/" />;

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await dispatch(login(email, password));
		if (data) {
			setErrors(data);
		}
	};

	const demo = async (e) => {
		e.preventDefault();
		const user = {
			email: "demo@aa.io",
			password: "password",
		};
		dispatch(login(user.email, user.password));
	};

	return (
		<div className="flex justify-center h-screen bg-gradient-to-r from-slate-900 to-violet-700 pt-20 pb-80">
			<div className="flex flex-row justify-center p-20">
				<NavLink exact to="/">
					<FontAwesomeIcon
						style={{ color: "04d9ff" }}
						className="fa-4x"
						icon={faArrowTurnUp}
					/>
				</NavLink>
				<h2 className="text-8xl text-slate-200">Level up</h2>
				<div></div>
				<div className="flex flex-row justify-center text-slate-200 text-3xl underline decoration-sky-500 decoration-double underline-offset-8">
					Game Reviews
				</div>
			</div>
			<div className="flex flex-col justify-self-center border bg-black rounded-md w-fill p-5">
				<h1 className="flex justify-center text-slate-50 text-2xl pb-6">
					Log In
				</h1>
				<div className="flex flex-row">
					<form className="flex flex-col" onSubmit={handleSubmit}>
						<ul>
							{errors.map((error, idx) => (
								<li
									className="flex justify-center text-red-500"
									key={idx}
								>
									{error}
								</li>
							))}
						</ul>
						<label className="flex flex-col text-slate-50 text-lg p-2">
							Email :
							<input
								className="p-2 w-80 bg-slate-600 m-2"
								type="text"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</label>
						<label className="flex flex-col text-slate-50 text-lg p-2">
							Password :
							<input
								className="p-2 w-80 bg-slate-600 m-2"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</label>
						<button
							className="text-slate-50 rounded-lg bg-purple-700 hover:bg-purple-900 p-1 mt-6"
							type="submit"
						>
							Log In
						</button>
						<button
							className="text-slate-50 mt-10 rounded-lg text-lg bg-sky-600 hover:text-sky-500"
							onClick={demo}
						>
							Demo User
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default LoginFormPage;
