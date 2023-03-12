import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import LoginFormPage from "../LoginFormPage";
import { login } from "../../store/session";
import LoginFormModal from "../LoginFormModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
	const dispatch = useDispatch();
  const history = useHistory()
	const [modalOpen, setModalOpen] = useState(false);
	const [loginModalOpen, setLoginModalOpen] = useState(false);

	const demo = async (e) => {
		e.preventDefault();
		const user = {
			email: "demo@aa.io",
			password: "password",
		};
		setModalOpen(false);
		dispatch(login(user.email, user.password));
	};

  const loginPage = async (e) => {

    history.push('/login')
  }

  const signupPage = async (e) => {

    history.push('/signup')
  }

	return (
		<div className="flex flex-col h-screen bg-gradient-to-r from-sky-600 to-purple-900">
			<div className="flex flex-row justify-center p-20">
				<FontAwesomeIcon
					style={{ color: "04d9ff" }}
					className="fa-10x animate-pulse shadow"
					icon={faArrowTurnUp}
				/>
				<h2 className="text-9xl text-slate-200">Level up</h2>
				<h3 className="text-slate-200 text-5xl underline decoration-sky-500 decoration-double underline-offset-8">
					Game Reviews
				</h3>
			</div>
			<div className="flex flex-row justify-center content-center self-center rounded-bl-lg w-1/3 ">
				<div className="text-slate-300 bg-slate-900 p-5 border-2 rounded-bl-lg border-slate-200 flex place-items-center self-center justify-center content-center items-center hover:border-4 border-sky-400 hover:shadow-2xl hover:shadow-sky-700 opacity-85 hover:opacity-100">
					<div className="flex flex-col"></div>
					<button className="p-5 text-lg hover:text-sky-500" onClick={demo}>
						Demo User
					</button>

					<button
						className="p-5 text-lg hover:text-sky-500"
						onClick={() => {
							loginPage();
						}}
					>
						{" "}
						Login{" "}
					</button>
					{loginModalOpen && (
						<LoginFormModal setLoginModalOpen={setLoginModalOpen} />
					)}

					<button
						className="p-5 text-lg hover:text-sky-500"
						onClick={() => {
							signupPage();
						}}
					>
						{" "}
						Sign Up{" "}
					</button>
					{modalOpen && <Modal setOpenModal={setModalOpen} />}
				</div>
			</div>
		</div>
	);
}

export default HomePage;
